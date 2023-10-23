import React from "react";
import { useContractRead } from "wagmi";
const UNI_CONTRACT_ADDRESS = "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD";
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

const index = () => {
    const { data } = useContractRead({
        address: UNI_CONTRACT_ADDRESS,
        abi: abi,
        functionName: "balanceOf",
    });
    // console.log(data);
    return <div>index</div>;
};

export default index;
