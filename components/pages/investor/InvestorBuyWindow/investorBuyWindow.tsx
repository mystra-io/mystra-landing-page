import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Select,
  Spinner,
} from "@chakra-ui/react";
import https from "https";

import {
  CasperClient,
  CasperServiceByJsonRPC,
  CLPublicKey,
  DeployUtil,
} from "casper-js-sdk";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMemo } from "react";
import { ERC20_ABI, TICKET_ABI } from "./abis";
import { Dispatch } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { CEP47Client } from "casper-cep47-js-client";

const StoreHeader = ({ children }: any) => {
  return (
    <Box fontWeight="700" lineHeight="90%" fontSize="14px" color="white">
      {children}
    </Box>
  );
};

const apiUrl = "https://node.casperarmy.org/";
const casperService = new CasperServiceByJsonRPC(apiUrl);
const casperClient = new CasperClient(apiUrl);

const StoreLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Box onClick={() => (window.location.href = href)}>
      <Flex alignItems="center" gap="12px">
        <Box boxSize="5px" bg="#FF0202" fontSize="14px" fontWeight="700" />
        <Link textDecoration="underline">{children}</Link>
      </Flex>
    </Box>
  );
};

const AmountButton = ({
  children,
  onClick,
  disabled = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Flex
      align="center"
      fontSize="18px"
      justify="center"
      boxSize="41px"
      border="1px solid white"
      borderRadius="50%"
      opacity={disabled ? "0.5" : "1"}
      cursor={disabled ? "default" : "pointer"}
      onClick={onClick}
      _hover={{ bg: "white" }}
    >
      {children}
    </Flex>
  );
};

const NETWORK_DATA = {
  80001: {
    address: "0x8Bc98ebcc995F9Dbf23129c62eeE171c02F31a9A",
    name: "MUMBAI",
    currencies: [
      {
        symbol: "TST",
        address: "0xa74101E5082efFCaEb34965772e20fE418039A49",
      },
    ],
  },
  42161: {
    address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
    name: "ARBITRUM",
    currencies: [
      {
        symbol: "USDT",
        address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
      },
      {
        symbol: "USDC",
        address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      },
    ],
  },
  25: {
    address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
    name: "CRONOS",
    currencies: [
      {
        symbol: "USDT",
        address: "0x66e428c3f67a68878562e79A0234c1F83c208770",
      },
      {
        symbol: "USDC",
        address: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
      },
    ],
  },
  137: {
    address: "0x8b536DB22a546f1B07948A5C35c1688aB0f3eB9c",
    name: "POLYGON",
    currencies: [
      {
        symbol: "USDT",
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      },
      {
        symbol: "USDC",
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
    ],
  },
  1: {
    address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
    name: "ETH",
    currencies: [
      {
        symbol: "USDT",
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      {
        symbol: "USDC",
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
    ],
  },
  0: {
    address: "casper-address",
    name: "CASPER",
    currencies: [{ symbol: "CSPR", address: "address" }],
  },
  56: {
    address: "0xc3e9D052720aEe3E0AcE5209F9d3BDACaDf30AbD",
    name: "BSC",
    currencies: [
      {
        symbol: "BUSD",
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      },
      {
        symbol: "USDC",
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
      },
      {
        symbol: "BSC-USD",
        address: "0x55d398326f99059fF775485246999027B3197955",
      },
    ],
  },
};

export const InvestorBuyWindow = ({
  currentRound,
  currentDiscount,
  cryptoPrice,
  setAmountGot,
  amount,
  setAmount,
}: {
  currentRound: number;
  currentDiscount: number;
  cryptoPrice: number;
  setAmountGot: (number: number) => any;
  amount: number;
  setAmount: (val: number) => void;
}) => {
  const [chainId, setChainId] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("CSPR");
  const [ticketAddress, setTicketAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);

  const switchNetwork = async (newChainId: number) => {
    const currentChainId = 0;

    if (currentChainId !== newChainId) {
      try {
        await new ethers.providers.Web3Provider(
          (window as any).ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x" + newChainId.toString(16) }],
          })
        );
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if ((switchError as any).code === 4902) {
          alert("add this chain id");
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if ((window as any).ethereum) {
          const provider = await new ethers.providers.Web3Provider(
            (window as any).ethereum,
            "any"
          );

          const { chainId } = await provider.getNetwork();

          setChainId(chainId);

          await new ethers.providers.Web3Provider(
            (window as any).ethereum.on("chainChanged", (e: any) => {
              try {
                setChainId(parseInt(e));
              } catch (e) {}
            })
          );
        }
      } catch (e) {}
    })();
  }, []);

  useEffect(() => {
    if ((window as any).ethereum) {
      setBalance(null);
      if (chainId != 0 && (NETWORK_DATA as any)[chainId]) {
        (async () => {
          setTicketAddress((NETWORK_DATA as any)[chainId].address);
        })();
      }
    }
  }, [chainId]);

  const checkBalance = async () => {
    if (isEVM) {
      const provider = new ethers.providers.Web3Provider(
        (window as any).ethereum
      );
      const ticketContract = new ethers.Contract(
        ticketAddress,
        TICKET_ABI,
        provider.getSigner()
      );

      const amountGot = await ticketContract.ticketsBoughtByUser(
        await provider.getSigner().getAddress()
      );

      setBalance(Number(amountGot));
    } else {
      /*
      const cep47 = new CEP47Client(
        "https://node.casperarmy.org",
        "casper"!
      );

      let accountInfo = await getAccountInfo("https://node.casperarmy.org", "01ee30c80bd952fb9e6f7075566a9759424a112cfd8fa5d41e23db0b294d48aa0b");

      const contractHash = await getAccountNamedKeyValue(
        accountInfo,
        `ticket_contract_hash`
      );
    
      const contractPackageHash = await getAccountNamedKeyValue(
        accountInfo,
        `contract_package_hash`
      );
    
      await cep47.setContractHash(contractHash, contractPackageHash);


      const balanceOf1 = await cep47.balanceOf(CLPublicKey.fromHex("01ee30c80bd952fb9e6f7075566a9759424a112cfd8fa5d41e23db0b294d48aa0b"));;
  
      console.log('essa', balanceOf1);
 */

      try {
        await window.casperlabsHelper.requestConnection();
        const isConnected = await window.casperlabsHelper.isConnected();
        if (isConnected) {
          const publicKey = await window.casperlabsHelper.getActivePublicKey();

          const url = `https://casperarmy.org:4000/getTicketsPerWallet?wallet_address=${publicKey}&network_name=CASPER`;

          const res = await axios.get(url);

          const sum = res.data.rows[0].sum;

          console.log(res);

          setBalance(sum ? Number(sum) : 0);
          setChainId(0);
        } else {
          setBalance(Number(0));
          setChainId(0);
        }
      } catch (e: any) {
        setBalance(Number(0));
        setChainId(0);
      }
    }
  };

  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const x = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=casper-network"
        )
        .then((res: any) => {
          const priceInDollars = cryptoPrice;
          console.log();
          const pricePerCSPR = parseFloat(res.data[0].current_price);
          const priceInCSPR = priceInDollars / pricePerCSPR;
          console.log(priceInCSPR);
          setPrice(Math.round(priceInCSPR));
        })
        .catch((e) => {
          console.log(e);
          setPrice(508);
        });
    })();
  }, [cryptoPrice]);

  const [selectedNetwork, setSelectedNetwork] = useState<number>(0);

  const handleAmountChange = (e: any) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);
    if (newAmount < 100) {
      setAmount(100);
    }
    if (newAmount > 500) {
      setAmount(500);
    }
  };

  const handleNetworkSelect = (e: any) => {
    setSelectedNetwork(Number(e.target.value));
    setCurrency(
      (NETWORK_DATA as any)[Number(e.target.value)].currencies[0].address
    );
    setSymbol(
      (NETWORK_DATA as any)[Number(e.target.value)].currencies[0].symbol
    );
    if (e.target.value > 0) {
      switchNetwork(Number(e.target.value));
    }
  };

  const handleSelectCurrency = (e: any) => {
    setCurrency(e.target.value);
    var index = e.nativeEvent.target.selectedIndex;
    var text = e.nativeEvent.target[index].text;
    setSymbol(text);
  };

  const currencies = useMemo(() => {
    if ((NETWORK_DATA as any)[selectedNetwork].currencies) {
      return (NETWORK_DATA as any)[selectedNetwork].currencies;
    } else {
      return [];
    }
  }, [selectedNetwork]);

  const isEVM = useMemo(() => {
    if (selectedNetwork > 0) return true;
    else return false;
  }, [selectedNetwork]);

  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const payWithEVM = async () => {
    if (chainId == selectedNetwork && !isLoading) {
      setIsLoading(true);
      setError(null);
      try {
        if (!isAllowed) {
          const provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
          );
          const ticketContract = new ethers.Contract(
            ticketAddress,
            TICKET_ABI,
            provider.getSigner()
          );

          const paymentContract = new ethers.Contract(
            currency,
            ERC20_ABI,
            provider.getSigner()
          );

          const decimals = await paymentContract.decimals();
          const price = 33;

          const userAddress = await provider.getSigner().getAddress();
          const userBalance = await paymentContract.balanceOf(userAddress);

          const amountSaved = amount;
          const networkName = (NETWORK_DATA as any)[chainId].name;

          try {
            const txOne = await paymentContract.transfer(
              "0xd59D223fe885b4295a0a35D6209377762Ab06232",
              ethers.utils.parseUnits(
                (Number(amount) * Number(price)).toString(),
                decimals
              )
            );

            await txOne.wait();
          } catch (error) {
            setError(
              "Error occured. Check your balance or try other allocation method."
            );
          } finally {
            setIsLoading(false);
          }
        } else {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }
      } catch (e) {
        setIsLoading(false);
      }
      setIsLoading(false);
    }
  };

  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const payWithCasper = async () => {
    ///Tutaj przygotowane dla Ciebie
    // get address to send from input.\

    openInNewTab(
      `https://cspr.live/transfer?recipient=020377bc3ad54b5505971e001044ea822a3f6f307f8dc93fa45a05b7463c0a053bed&amount=${
        amount * price
      }`
    );

    /*
    try {
      setError(null);

      window.casperlabsHelper.requestConnection();

      // gasPrice for native transfers can be set to 1.
      const gasPrice = 3;

      // Time that the deploy will remain valid for, in milliseconds
      // The default value is 1800000 ms (30 minutes).
      const ttl = 1800000;
      const publicKeyHex = await window.casperlabsHelper.getActivePublicKey();
      const publicKey = CLPublicKey.fromHex(publicKeyHex);

      console.log(publicKeyHex);

      let deployParams = new DeployUtil.DeployParams(
        publicKey,
        "casper",
        gasPrice,
        ttl
      );

      const id = 287821;

      // We create a public key from account-address (it is the hex representation of the public-key with an added prefix).
      const toPublicKey = CLPublicKey.fromHex(
        "01ee30c80bd952fb9e6f7075566a9759424a112cfd8fa5d41e23db0b294d48aa0b"
      );

      const session = DeployUtil.ExecutableDeployItem.newTransfer(
        amount,
        toPublicKey,
        null,
        id
      );

      const payment = DeployUtil.standardPayment(1 * amount);
      const deploy = DeployUtil.makeDeploy(deployParams, session, payment);

      // Turn your transaction data to format JSON
      const json = DeployUtil.deployToJson(deploy);

      // Sign transcation using casper-signer.
      const signature = await window.casperlabsHelper.sign(
        json,
        publicKeyHex,
        "01ee30c80bd952fb9e6f7075566a9759424a112cfd8fa5d41e23db0b294d48aa0b"
      );
      const deployObject = DeployUtil.deployFromJson(signature);

      console.log("deploy", deployObject);

      await axios.post(
        "https://casperarmy.org:4000/deployTransaction", 
        deployObject, 
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false
          })
        }
      ).then(res => {
        console.log('result', res);
      })

      return

      // Here we are sending the signed deploy.
      // @ts-ignore
      const signed = await casperClient.putDeploy(deployObject.val);

      // Display transaction address
      const tx = document.getElementById("tx");
      (tx as any).textContent = `tx: ${signed}`;

      console.log(signed);
      console.log(tx);
    } catch (e) {
      return;
      console.log(e);
    }
    */
  };

  return (
    <Grid
      mt="100px"
      mx="32px"
      mb="40px"
      padding="40px"
      bg="rgba(18, 18, 18, 0.7)"
      borderRadius="28px"
      border="1px solid"
      borderColor="rgba(40, 40, 40, 1)"
    >
      <Flex flexDir="column" position="relative">
        <Flex
          flexDir={{ base: "column", xl: "initial" }}
          justifyContent={{ base: "initial", xl: "space-between" }}
          position="relative"
          align={{ base: "initial", xl: "flex-end" }}
        >
          <Flex
            flexDir="column"
            justify="flex-end"
            alignItems={{ base: "center", xl: "flex-start" }}
          >
            <StoreHeader>Amount</StoreHeader>
            <Flex
              gap="12px"
              mt="15px"
              justifyContent={{ base: "center", xl: "flex-start" }}
              display={{ base: "grid", xl: "flex" }}
              gridTemplateColumns="1fr"
              w={{ base: "100%" }}
              pos="relative"
            >
              <Flex
                pos="absolute"
                left="0px"
                top="0px"
                align="center"
                cursor="pointer"
                justify="center"
                boxSize="41px"
                zIndex="1"
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                onClick={() =>
                  amount >= 200 ? setAmount(amount - 20) : setAmount(100)
                }
              >
                <Box fontSize="40px" mb="7px" color="gray">
                  -
                </Box>
              </Flex>
              <Input
                h="41px"
                zIndex="0"
                textAlign="center"
                w={{ base: "auto" }}
                borderRadius="10px"
                border="1px solid white"
                defaultValue={amount}
                value={amount}
                onChange={handleAmountChange}
              />

              <Flex
                pos="absolute"
                right="0px"
                top="0px"
                h="41px"
                cursor="pointer"
                _hover={{ bg: "rgba(255,255,255,0.1)" }}
                w="41px"
                align="center"
                justify="center"
                zIndex="1"
                onClick={() =>
                  amount < 500 ? setAmount(amount + 20) : setAmount(500)
                }
              >
                <Box fontSize="30px" color="#04D7B1" mb="5px">
                  +
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            m={{ base: "40px 0px 20px 0px", xl: "0" }}
            alignItems={{ base: "center", xl: "flex-end" }}
            justifyContent="flex-end"
          >
            <StoreHeader>Mint charge per ticket</StoreHeader>
            <Flex alignItems="flex-end" fontWeight="700" mt="15px" gap="6px">
              <Box fontSize="44px" lineHeight="100%">
                {cryptoPrice}
              </Box>
              <Box fontSize="28px" lineHeight="120%">
                USD
              </Box>
            </Flex>
            <Flex
              opacity="0.0"
              fontWeight="700"
              mt="6px"
              justifyContent="flex-end"
            >
              $ {(amount * cryptoPrice).toFixed(2)}
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            m={{ base: "00px 0px 20px 0px", xl: "0" }}
            alignItems={{ base: "center", xl: "flex-end" }}
            justifyContent="flex-end"
          >
            <StoreHeader>Total</StoreHeader>
            <Flex alignItems="flex-end" fontWeight="700" mt="15px" gap="6px">
              <Box fontSize="44px" lineHeight="100%">
                {symbol != "CSPR" ? amount * cryptoPrice : amount * price}
              </Box>
              <Box fontSize="28px" lineHeight="120%">
                {symbol}
              </Box>
            </Flex>
            <Flex
              opacity="0.4"
              fontWeight="700"
              mt="6px"
              justifyContent="flex-end"
            >
              $ {(amount * cryptoPrice).toFixed(2)}
            </Flex>
          </Flex>
          <Grid
            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap="20px"
            alignItems="flex-end"
          >
            <Flex flexDirection="column" gap="10px">
              <StoreHeader>Select network</StoreHeader>
              <Select
                h="64px"
                onChange={handleNetworkSelect}
                disabled={isLoading}
              >
                <option value="0">CASPER</option>
                <option value="1">ETHEREUM</option>
                <option value="25">CRONOS</option>
                <option value="56">BSC</option>
                <option value="137">POLYGON</option>
              </Select>
            </Flex>
            <Flex flexDirection="column" gap="10px">
              <StoreHeader>Select currency</StoreHeader>
              <Select
                h="64px"
                onChange={handleSelectCurrency}
                disabled={isLoading}
              >
                {currencies.map((el: any) => {
                  return (
                    <option key={el.address} value={el.address}>
                      {el.symbol}
                    </option>
                  );
                })}
              </Select>
            </Flex>
            {/* <GridItem display="flex" gap="10px" colSpan={2}>
              {balance != null ? (
                <Box>
                  You have{" "}
                  <Box display="inline-block" color="red">
                    {balance} tickets
                  </Box>{" "}
                  on {(NETWORK_DATA as any)[chainId].name} network
                </Box>
              ) : (
                <Box>Check your balance</Box>
              )}
              <Image
                cursor="pointer"
                onClick={checkBalance}
                src={IconAssets.refresh}
              ></Image>
            </GridItem> */}
          </Grid>
        </Flex>
        <Flex mt="20px" flexDir="column">
          <Checkbox
            colorScheme="purple"
            mt="20px"
            onChange={(e) => setTermsAgreed(e.target.checked)}
          >
            I have read and agreed to{" "}
            <Link
              color="#04D7B1"
              target="_blank"
              href="https://docs.mystra.io/docs/what-is-mystra/1.7-Terms-of-use"
            >
              Terms and Conditions{" "}
            </Link>
          </Checkbox>
          {isEVM ? (
            <Button
              opacity={chainId == selectedNetwork ? "1" : "0.5"}
              cursor={chainId == selectedNetwork ? "pointer" : "default"}
              disabled={!termsAgreed}
              h="64px"
              mt="20px"
              color="black"
              onClick={payWithEVM}
            >
              {chainId == selectedNetwork ? (
                isLoading ? (
                  <Spinner boxSize="20px" color="red" />
                ) : (
                  "Proceed allocation"
                )
              ) : (
                "Proceed allocation"
              )}
            </Button>
          ) : (
            <Button
              disabled={!termsAgreed}
              h="64px"
              mt="20px"
              color="black"
              onClick={payWithCasper}
            >
              Mint with Casper
            </Button>
          )}
          {error && (
            <Box mt="16px" color="red">
              {error}
            </Box>
          )}
        </Flex>
      </Flex>
    </Grid>
  );
};
