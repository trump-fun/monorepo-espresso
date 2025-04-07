/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  query GetPools(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n    $skip: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n        updatedAt\n      }\n      imageUrl\n      chainName\n      createdAt\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      lastUpdatedBlockNumber\n      lastUpdatedBlockTimestamp\n      lastUpdatedTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      originalTruthSocialPostId\n    }\n  }\n': typeof types.GetPoolsDocument;
  '\n  query GetBets(\n    $first: Int = 10\n    $filter: Bet_filter!\n    $orderBy: Bet_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    bets(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      option\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      user\n      tokenType\n      createdAt\n      isWithdrawn\n      chainName\n      updatedAt\n      pool {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        pointsVolume\n        usdcVolume\n        usdcBetTotals\n        pointsBetTotals\n        originalTruthSocialPostId\n        betsCloseAt\n        status\n      }\n    }\n  }\n': typeof types.GetBetsDocument;
  '\n  query GetPayoutClaimed(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: PayoutClaimed_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: PayoutClaimed_filter\n  ) {\n    payoutClaimeds(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      poolId\n      user\n      amount\n      tokenType\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n      bet {\n        id\n        amount\n        option\n        user\n        createdAt\n        isWithdrawn\n        tokenType\n        pool {\n          id\n          question\n          options\n          status\n          winningOption\n          isDraw\n          betsCloseAt\n          usdcVolume\n          pointsVolume\n          usdcBetTotals\n          pointsBetTotals\n        }\n      }\n      pool {\n        id\n        question\n        options\n        status\n        winningOption\n        isDraw\n        betsCloseAt\n        usdcVolume\n        pointsVolume\n        usdcBetTotals\n        pointsBetTotals\n      }\n    }\n  }\n': typeof types.GetPayoutClaimedDocument;
  '\n  query GetBetWithdrawals(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: BetWithdrawal_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: BetWithdrawal_filter\n  ) {\n    betWithdrawals(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      user\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n    }\n  }\n': typeof types.GetBetWithdrawalsDocument;
  '\n  query GetBetPlaced(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n': typeof types.GetBetPlacedDocument;
  '\n  query GetBetPlacedServer(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n': typeof types.GetBetPlacedServerDocument;
  '\n  query GetPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      chainName\n      createdAt\n      imageUrl\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      winningOption\n      originalTruthSocialPostId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n    }\n  }\n': typeof types.GetPoolDocument;
  '\n  query GetPoolsServer(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        gradedTransactionHash\n        betsCloseAt\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n': typeof types.GetPoolsServerDocument;
  '\n  query GetPoolServer(\n    $poolId: ID!\n  ) {\n    pool(\n      id: $poolId\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n        gradedTransactionHash\n        betsCloseAt\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n': typeof types.GetPoolServerDocument;
};
const documents: Documents = {
  '\n  query GetPools(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n    $skip: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n        updatedAt\n      }\n      imageUrl\n      chainName\n      createdAt\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      lastUpdatedBlockNumber\n      lastUpdatedBlockTimestamp\n      lastUpdatedTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      originalTruthSocialPostId\n    }\n  }\n':
    types.GetPoolsDocument,
  '\n  query GetBets(\n    $first: Int = 10\n    $filter: Bet_filter!\n    $orderBy: Bet_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    bets(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      option\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      user\n      tokenType\n      createdAt\n      isWithdrawn\n      chainName\n      updatedAt\n      pool {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        pointsVolume\n        usdcVolume\n        usdcBetTotals\n        pointsBetTotals\n        originalTruthSocialPostId\n        betsCloseAt\n        status\n      }\n    }\n  }\n':
    types.GetBetsDocument,
  '\n  query GetPayoutClaimed(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: PayoutClaimed_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: PayoutClaimed_filter\n  ) {\n    payoutClaimeds(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      poolId\n      user\n      amount\n      tokenType\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n      bet {\n        id\n        amount\n        option\n        user\n        createdAt\n        isWithdrawn\n        tokenType\n        pool {\n          id\n          question\n          options\n          status\n          winningOption\n          isDraw\n          betsCloseAt\n          usdcVolume\n          pointsVolume\n          usdcBetTotals\n          pointsBetTotals\n        }\n      }\n      pool {\n        id\n        question\n        options\n        status\n        winningOption\n        isDraw\n        betsCloseAt\n        usdcVolume\n        pointsVolume\n        usdcBetTotals\n        pointsBetTotals\n      }\n    }\n  }\n':
    types.GetPayoutClaimedDocument,
  '\n  query GetBetWithdrawals(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: BetWithdrawal_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: BetWithdrawal_filter\n  ) {\n    betWithdrawals(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      user\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n    }\n  }\n':
    types.GetBetWithdrawalsDocument,
  '\n  query GetBetPlaced(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n':
    types.GetBetPlacedDocument,
  '\n  query GetBetPlacedServer(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n':
    types.GetBetPlacedServerDocument,
  '\n  query GetPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      chainName\n      createdAt\n      imageUrl\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      winningOption\n      originalTruthSocialPostId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n    }\n  }\n':
    types.GetPoolDocument,
  '\n  query GetPoolsServer(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        gradedTransactionHash\n        betsCloseAt\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n':
    types.GetPoolsServerDocument,
  '\n  query GetPoolServer(\n    $poolId: ID!\n  ) {\n    pool(\n      id: $poolId\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n        gradedTransactionHash\n        betsCloseAt\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n':
    types.GetPoolServerDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPools(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n    $skip: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n        updatedAt\n      }\n      imageUrl\n      chainName\n      createdAt\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      lastUpdatedBlockNumber\n      lastUpdatedBlockTimestamp\n      lastUpdatedTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      originalTruthSocialPostId\n    }\n  }\n'
): (typeof documents)['\n  query GetPools(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n    $skip: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n      skip: $skip\n    ) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n        updatedAt\n      }\n      imageUrl\n      chainName\n      createdAt\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      lastUpdatedBlockNumber\n      lastUpdatedBlockTimestamp\n      lastUpdatedTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      originalTruthSocialPostId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetBets(\n    $first: Int = 10\n    $filter: Bet_filter!\n    $orderBy: Bet_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    bets(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      option\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      user\n      tokenType\n      createdAt\n      isWithdrawn\n      chainName\n      updatedAt\n      pool {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        pointsVolume\n        usdcVolume\n        usdcBetTotals\n        pointsBetTotals\n        originalTruthSocialPostId\n        betsCloseAt\n        status\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetBets(\n    $first: Int = 10\n    $filter: Bet_filter!\n    $orderBy: Bet_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    bets(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      option\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      user\n      tokenType\n      createdAt\n      isWithdrawn\n      chainName\n      updatedAt\n      pool {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        pointsVolume\n        usdcVolume\n        usdcBetTotals\n        pointsBetTotals\n        originalTruthSocialPostId\n        betsCloseAt\n        status\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPayoutClaimed(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: PayoutClaimed_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: PayoutClaimed_filter\n  ) {\n    payoutClaimeds(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      poolId\n      user\n      amount\n      tokenType\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n      bet {\n        id\n        amount\n        option\n        user\n        createdAt\n        isWithdrawn\n        tokenType\n        pool {\n          id\n          question\n          options\n          status\n          winningOption\n          isDraw\n          betsCloseAt\n          usdcVolume\n          pointsVolume\n          usdcBetTotals\n          pointsBetTotals\n        }\n      }\n      pool {\n        id\n        question\n        options\n        status\n        winningOption\n        isDraw\n        betsCloseAt\n        usdcVolume\n        pointsVolume\n        usdcBetTotals\n        pointsBetTotals\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetPayoutClaimed(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: PayoutClaimed_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: PayoutClaimed_filter\n  ) {\n    payoutClaimeds(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      poolId\n      user\n      amount\n      tokenType\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n      bet {\n        id\n        amount\n        option\n        user\n        createdAt\n        isWithdrawn\n        tokenType\n        pool {\n          id\n          question\n          options\n          status\n          winningOption\n          isDraw\n          betsCloseAt\n          usdcVolume\n          pointsVolume\n          usdcBetTotals\n          pointsBetTotals\n        }\n      }\n      pool {\n        id\n        question\n        options\n        status\n        winningOption\n        isDraw\n        betsCloseAt\n        usdcVolume\n        pointsVolume\n        usdcBetTotals\n        pointsBetTotals\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetBetWithdrawals(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: BetWithdrawal_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: BetWithdrawal_filter\n  ) {\n    betWithdrawals(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      user\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n    }\n  }\n'
): (typeof documents)['\n  query GetBetWithdrawals(\n    $first: Int = 100\n    $skip: Int = 0\n    $orderBy: BetWithdrawal_orderBy = blockTimestamp\n    $orderDirection: OrderDirection = desc\n    $where: BetWithdrawal_filter\n  ) {\n    betWithdrawals(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      where: $where\n    ) {\n      id\n      betId\n      user\n      blockNumber\n      blockTimestamp\n      transactionHash\n      chainName\n      chainId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetBetPlaced(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n'
): (typeof documents)['\n  query GetBetPlaced(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetBetPlacedServer(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n'
): (typeof documents)['\n  query GetBetPlacedServer(\n    $first: Int = 10\n    $filter: BetPlaced_filter!\n    $orderBy: BetPlaced_orderBy!\n    $orderDirection: OrderDirection!\n    $skip: Int = 0\n  ) {\n    betPlaceds(\n      first: $first\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      skip: $skip\n    ) {\n      id\n      betId\n      user\n      optionIndex\n      amount\n      poolId\n      blockNumber\n      blockTimestamp\n      transactionHash\n      tokenType\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      chainName\n      createdAt\n      imageUrl\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      winningOption\n      originalTruthSocialPostId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetPool($poolId: ID!) {\n    pool(id: $poolId) {\n      id\n      poolId\n      question\n      options\n      status\n      chainId\n      chainName\n      createdAt\n      imageUrl\n      createdBlockNumber\n      createdBlockTimestamp\n      createdTransactionHash\n      gradedBlockNumber\n      gradedBlockTimestamp\n      gradedTransactionHash\n      betsCloseAt\n      usdcBetTotals\n      pointsBetTotals\n      usdcVolume\n      pointsVolume\n      winningOption\n      originalTruthSocialPostId\n      bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPoolsServer(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        gradedTransactionHash\n        betsCloseAt\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n'
): (typeof documents)['\n  query GetPoolsServer(\n    $filter: Pool_filter!\n    $orderBy: Pool_orderBy!\n    $orderDirection: OrderDirection!\n    $first: Int\n  ) {\n    pools(\n      where: $filter\n      orderBy: $orderBy\n      orderDirection: $orderDirection\n      first: $first\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        gradedTransactionHash\n        betsCloseAt\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetPoolServer(\n    $poolId: ID!\n  ) {\n    pool(\n      id: $poolId\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n        gradedTransactionHash\n        betsCloseAt\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n'
): (typeof documents)['\n  query GetPoolServer(\n    $poolId: ID!\n  ) {\n    pool(\n      id: $poolId\n    ) {\n        id\n        poolId\n        question\n        options\n        status\n        chainId\n        chainName\n        createdAt\n        imageUrl\n        createdBlockNumber\n        createdBlockTimestamp\n        createdTransactionHash\n        lastUpdatedBlockNumber\n        lastUpdatedBlockTimestamp\n        lastUpdatedTransactionHash\n        gradedBlockNumber\n        gradedBlockTimestamp\n        gradedTransactionHash\n        betsCloseAt\n       bets {\n        id\n        betId\n        user\n        option\n        amount\n        tokenType\n      }\n        usdcBetTotals\n        pointsBetTotals\n        usdcVolume\n        pointsVolume\n        originalTruthSocialPostId\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
