import APIResponse from "../models/API-response"

const REFERENCE_CURRENCY: APIResponse = {
    Cur_ID: 0,
    Date: new Date().toISOString(),
    Cur_Abbreviation: 'BYN',
    Cur_Scale: 1,
    Cur_Name: 'Белорусский рубль',
    Cur_OfficialRate: 1,
};

export default REFERENCE_CURRENCY; 
