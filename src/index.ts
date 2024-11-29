import { getSwapRouteV1 } from "./apis/V1Get";
import { postSwapRouteV1 } from "./apis/V1Post";
import { V1Swap } from "./operations/V1Swap";
import { getSwapRouteEncodedV0 } from "./apis/V0Get";
import { V0Swap } from "./operations/V0Swap";


async function main() {
    while (true) {
        await postSwapRouteV1()
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

main();


/**
 * V1 Implementation
 */
    // APIs
        // getSwapRouteV1();
        // postSwapRouteV1();
    
    // Execution
        // V1Swap();


/**
 * Non-versioned Implementation
 */

    // APIs
        // getSwapRouteEncodedV0();

    // Execution    
        // V0Swap();