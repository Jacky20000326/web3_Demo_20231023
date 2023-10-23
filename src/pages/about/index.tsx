import React from "react";
import { useContractRead, useSignTypedData } from "wagmi";
const UNI_CONTRACT_ADDRESS = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

const abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
] as const;

const About = () => {
    const { data } = useContractRead({
        address: UNI_CONTRACT_ADDRESS,
        abi: abi,
        functionName: "balanceOf",
    });
    return <>About</>;
};

export default About;
