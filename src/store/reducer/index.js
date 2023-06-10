import { combineReducers } from "redux";
import collectorRequest from './collectorRequest';
import complains from "./complain";
import collector from "./collector";
import supervisor from "./supervisor";
import forSaleGarbage from "./forSaleGarbage";


const rootReducers = combineReducers({
    collectorRequest : collectorRequest,
    collector : collector,
    complains : complains,
    supervisor :  supervisor,
    forSaleGarbage : forSaleGarbage
})

export default rootReducers ;