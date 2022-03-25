import { Box, Button, Input, Stack, Text } from 'degen';
import React, { useState, useEffect } from 'react';
import { useConnectedWallet, useSolana } from '@saberhq/use-solana';
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor';
import { ASSOCIATED_TOKEN_PROGRAM_ID, Token } from "@solana/spl-token";
import stakeIdl from '../idl/stake.json';
import vehoneyIdl from '../idl/ve_honey.json';
import { VeHoney } from '../types/ve_honey';
import { Stake } from '../types/stake';

const VeHoneyModal = () => {
  // TODO: Declare state for user input
  const [inputValue, setInputValue] = useState(0);
  const wallet = useConnectedWallet();

  const veHoneyConversion = (inputValue/ 3.182).toFixed(3)

  const onInputChange = (event: any) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <Box width="96">
      <Box borderBottomWidth="0.375" paddingX="6" paddingY="4">
        <Text variant="large" color="textPrimary" weight="bold" align="center">
          Get veHONEY
        </Text>
      </Box>
      <Box padding="6">
        <Stack space="6">
          <Text align="center" weight="semiBold">
            Deposit pHONEY and recieve veHONey
          </Text>

          <Box
            marginX="auto"
            borderColor="accent"
            borderWidth="0.375"
            height="7"
            borderRadius="large"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="3/4"
          >
            <Text variant="small" color="accent">
              {inputValue} pHONEY = {veHoneyConversion} veHONEY
            </Text>
          </Box>
          <Stack space="2">
            <Stack direction="horizontal" justify="space-between">
              <Text variant="small" color="textSecondary">
                Your veHoney deposited
              </Text>
              <Text variant="small">332,420</Text>
            </Stack>
            <Stack direction="horizontal" justify="space-between">
              <Text variant="small" color="textSecondary">
                Your pHONEY balance
              </Text>
              <Text variant="small">332,420</Text>
            </Stack>
            <Stack direction="horizontal" justify="space-between">
              <Text variant="small" color="textSecondary">
                Lock period
              </Text>
              <Text variant="small">3 Months</Text>
            </Stack>
          </Stack>
          <Input
            value={inputValue}
            onChange={onInputChange}
            type="number"
            label="Amount"
            units="pHONEY"
            hideLabel
            placeholder="0"
          />
          <Button type="submit" width="full">Deposit</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default VeHoneyModal;
