import { getWorks } from "../libs/works";


(async function(){
    document.works = await getWorks();
    })()