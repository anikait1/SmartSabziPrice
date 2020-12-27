const errorCodes = {
    USER_NOT_FOUND: "user does not exists",
    ITEM_NOT_FOUND: "item does not exists",
    PRICE_POST_NOT_FOUND: "price-post does not exists",
    INVALID_PARAMETERS: "invalid parameters",
    SERVER_ERROR: "unable to process request",
  };
  
  const responseStatus = {
    SUCCESS: "success",
    FAIL: "fail",
  };
  
  const createResponse = (status, message, data) => {
    return { status, message, data };
  };
  
  module.exports = {
    errorCodes,
    createResponse,
    responseStatus
  };
  