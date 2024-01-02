// export const baseUrl = "https://api-mq.dev2prod.tech/v1/ucs/";
export const baseUrl = "https://api-chat.dev2prod.tech/v1/ucs/";
// export const baseUrl = "http://65.1.148.73:3000/v1/ucs/";
// export const webSocketUrl = "http://65.1.148.73:3000/v1/ucs/ws?uid=";
export const webSocketUrl = "wss://api-chat.dev2prod.tech/v1/ucs/ws?uid=";

// - - - - - AUTH - - - - - //
    // - - - LOGIN - - - //
    export const userVerifyEndPoint = 'user/check?type=login'; 
    export const otpEndPoint = 'user/verify?type=login';

// - - - - - DASHBOARD - - - - - //
    // - - - CHAT - - - //
    export const chatListEndPoint = 'chat/list';
 