import {
  Box,
  Button,
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
import { ElementAssets, IconAssets } from "../../../../../config";
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
  137: {
    address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
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
    address: "0x18b9F2EBA21FD61902622d6883BC068385Fb551D",
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

export const BuyWindow = ({
  currentRound,
  currentDiscount,
  cryptoPrice,
  setAmountGot,
}: {
  currentRound: number;
  currentDiscount: number;
  cryptoPrice: number;
  setAmountGot: (number: number) => any;
}) => {
  const [amount, setAmount] = useState<number>(1);
  const [chainId, setChainId] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("CSPR");
  const [ticketAddress, setTicketAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);

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
        if (switchError.code === 4902) {
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

              } catch (e) {

              }
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
  
            const res = await axios.get(url)

            const sum = res.data.rows[0].sum

            console.log(res)
      
            setBalance(sum ? Number(sum) : 0)
            setChainId(0);
  
        } else {
          setBalance(Number(0));
          setChainId(0);
        }
  
      } catch (e : any) {
        setBalance(Number(0));
        setChainId(0);
      }
      
     
    
    }
  };

  const [price, setPrice] = useState<number >(0);

  useEffect(() => {
    (async () => {
    const x = await axios.get("https://apiv1.casperarmy.org/GetToken?id=casper-network").then((res) => {
      const priceInDollars = cryptoPrice;
      const pricePerCSPR = parseFloat((res.data[0].current_price).replace(/,/g, '.'));
      const priceInCSPR = priceInDollars / pricePerCSPR;
      console.log(priceInCSPR)
      setPrice(Math.floor(priceInCSPR))
    }).catch((e) => {
      setPrice(1666)
    })
    
    })()
  }, [cryptoPrice])

  const [selectedNetwork, setSelectedNetwork] = useState<number>(0);

  const handleAmountChange = (e: any) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);
    if (newAmount < 0) {
      setAmount(1);
    }
    if (newAmount > 100) {
      setAmount(100);
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
          const price = await ticketContract.currentPrice();

          const userAddress = await provider.getSigner().getAddress();
          const userBalance = await paymentContract.balanceOf(userAddress);

          const ticketsBoughtByUser = await ticketContract.ticketsBoughtByUser(
            await provider.getSigner().getAddress()
          );

          if (Number(ticketsBoughtByUser) + Number(amount) > 100) {
            setError(
              `Exceeded limit per wallet. You can buy ${
                100 - ticketsBoughtByUser
              } tickets more`
            );
            throw Error();
          }

          if (
            Number(ethers.utils.formatUnits(userBalance.toString(), decimals)) <
            Number(amount) * Number(price)
          ) {
            setError("Insufficient balance.");
            throw Error();
          }

          const amountSaved = amount;
          const networkName = (NETWORK_DATA as any)[chainId].name;
          const txOne = await paymentContract.approve(
            ticketAddress,
            ethers.utils.parseUnits(
              (Number(amount) * Number(price)).toString(),
              decimals
            )
          );

          await txOne.wait();

          console.log(ticketContract);

          const txTwo = await ticketContract.buyTickets(amount, currency);
          await txTwo.wait();

          const url = `https://casperarmy.org:4000/insertTransaction?wallet_address=${userAddress}&network_name=${networkName}&ticket_quantity=${amountSaved}&sale_round=${currentRound}`;

          await axios.get(url);

          setIsLoading(false);
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
    <Grid>
      <Image mb="20px" src={ElementAssets.payWith} />
      <Flex
        flexDir="column"
        bg="rgba(0, 0, 0, 0.2)"
        border="2px solid #717171"
        borderRadius="25px"
        padding="42px"
        position="relative"
      >
        <Flex
          align="center"
          justify="space-between"
          flexDir={{ base: "column", xl: "initial" }}
          gap="10px"
          textTransform="uppercase"
        >
          <Box fontWeight="700" fontSize="28px" color="#FF0202">
            ROUND {currentRound}
          </Box>
          <Box
            bg="#FF0202"
            color="white"
            opacity={currentDiscount == 0 ? "0" : "1"}
            borderRadius="4px"
            padding="10px 14px"
            letterSpacing="0.19em"
            fontSize="14px"
            lineHeight="90%"
            fontWeight="700"
          >
            DISCOUNT {currentDiscount}% OFF
          </Box>
        </Flex>
        <Flex
          flexDir="column"
          align={{ base: "center", xl: "initial" }}
          textAlign={{ base: "center", xl: "initial" }}
        >
          <Box
            mt="24px"
            color="white"
            fontSize="28px"
            lineHeight="90%"
            fontWeight="700"
            textAlign={{ base: "center", xl: "initial" }}
          >
            Buy call-up ticket
          </Box>
          <Box
            fontSize="14px"
            textShadow=" 0px 4px 14px rgba(0, 0, 0, 0.25)"
            mt="14px"
            lineHeight="180%"
            maxW="480px"
          >
            The more tickets you buy, the more points you{" "}
            <Box color="#FF0202" display="inline">
              earn for each one
            </Box>
            . You can buy a{" "}
            <Box fontWeight="bold" display="inline">
              maximum of 100 tickets
            </Box>
            .
          </Box>
        </Flex>
        <Flex
          mt="40px"
          flexDir={{ base: "column", xl: "initial" }}
          justifyContent={{ base: "initial", xl: "space-between" }}
          position="relative"
        >
          <Flex
            flexDir="column"
            alignItems={{ base: "center", xl: "flex-start" }}
          >
            <StoreHeader>Amount</StoreHeader>
            <Flex
              gap="12px"
              mt="15px"
              justifyContent={{ base: "center", xl: "flex-start" }}
              display={{ base: "grid", xl: "flex" }}
              gridTemplateColumns="41px auto 41px"
              w="100%"
            >
              <AmountButton
                onClick={() => (amount > 1 ? setAmount(amount - 1) : null)}
              >
                <Box color="gray">-</Box>
              </AmountButton>
              <Input
                h="41px"
                textAlign="center"
                w={{ base: "auto", md: "76px" }}
                borderRadius="10px"
                border="1px solid white"
                defaultValue={amount}
                value={amount}
                onChange={handleAmountChange}
              />
              <AmountButton
                onClick={() => (amount < 100 ? setAmount(amount + 1) : null)}
              >
                <Box color="#FF0202"> +</Box>
              </AmountButton>
            </Flex>
          </Flex>
          <Flex
            flexDir="column"
            m={{ base: "40px 0px 20px 0px", xl: "0" }}
            alignItems={{ base: "center", xl: "flex-end" }}
            justifyContent="flex-start"
          >
            <StoreHeader>Total sum to pay</StoreHeader>
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
        </Flex>
        <Grid
          gridTemplateColumns={{ base: "1fr" }}
          gap="19px"
          mt="25px"
          opacity={isLoading ? "0.7" : "1"}
          cursor={isLoading ? "default" : "initial"}
        >
          <Grid gridTemplateColumns="1fr 1fr" gap="20px">
            <Flex flexDirection="column" gap="10px">
              <StoreHeader>Select network</StoreHeader>
              <Select
                h="64px"
                onChange={handleNetworkSelect}
                disabled={isLoading}
              >
                <option value="0">CASPER</option>
                <option value="1">ETHEREUM</option>
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
                  return <option value={el.address}>{el.symbol}</option>;
                })}
              </Select>
            </Flex>
            <GridItem display="flex" gap="10px" colSpan={2}>
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
            </GridItem>
          </Grid>
          {isEVM ? (
            <Button
              opacity={chainId == selectedNetwork ? "1" : "0.5"}
              cursor={chainId == selectedNetwork ? "pointer" : "default"}
              h="64px"
              color="black"
              onClick={payWithEVM}
            >
              {chainId == selectedNetwork ? (
                isLoading ? (
                  <Spinner boxSize="20px" color="red" />
                ) : (
                  "Proceed to payment"
                )
              ) : (
                "Proceed to payment"
              )}
            </Button>
          ) : (
            <Button h="64px" color="black" onClick={payWithCasper}>
              Pay with Casper
            </Button>
          )}
          {error && (
            <Box mt="5px" color="red">
              {error}
            </Box>
          )}

          <Box color="gray">
            Your purchased NFT appears in your wallet within 48h
          </Box>
        </Grid>
        <Flex
          borderTop="1px solid rgba(255, 255, 255, 0.12)"
          w="100%"
          mt="20px"
          pt="33px"
          gap="40px"
        >
          <StoreLink href="https://docs.casperarmy.org/docs/point-system/3.1-Description">
            About points
          </StoreLink>
          <StoreLink href="https://docs.casperarmy.org/docs/PRODUCTS%20AND%20SERVICES/2.7-call-up-ticket#what-is-a-ticket">
            What is the ticket
          </StoreLink>
        </Flex>
      </Flex>
    </Grid>
  );
};
