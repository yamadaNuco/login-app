
url_ = window.location.href

var idTokenRegex = /id_token=([^&]+)/;
var idTokenMatch = url_.match(idTokenRegex);

//ハードコーディングにするとスクレイピングされる..??????

var awsData = {
    apiGatewayUrl:'<apiGatewayUrl>',
    staticPageUrl:'<apiGatewayUrl>',
    cognitoDomainUrl:'<cognitoDomainUrl>',
    cognitoClientId:'<cognitoClientId>',
    embeddingContext:{},
    embeddedDashboardExperience:{},
    InitialDashboardEmbedUrl: '',
    embeddedConsoleExperience:{},
    embeddedQSearchExperience: {},
    dashboardClass:'UninitializedDashboard',
    dashboardInitialLoad:true,
    timerId:'',
    debugMode: false
};

if (idTokenMatch){
    var idToken = idTokenMatch[1];
}else{
    var url = "http://localhost:3002/#id_token=eyJraWQiOiJpaTIxSDNvQ0ZLZGFvckthc1prTnc2NnpWa0NQUlYyd3dWRTJ3WUd3bnBZPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiOXhEUnpsTkNWZEVIcXdtdXY2ckNiZyIsInN1YiI6IjM3NDQ2YWE4LWMwMzEtNzBjNS1hYmRmLTZjM2I0OGFiOTM1NCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfS3pzNkg0RmgxIiwiY29nbml0bzp1c2VybmFtZSI6Im51Y28tdGVzdDEiLCJhdWQiOiI1anU3dW9yMWI2MjlqZWs1dDZsdmtpbHRsaiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzEzMzQ1OTc3LCJleHAiOjE3MTMzNDk1NzcsImlhdCI6MTcxMzM0NTk3NywianRpIjoiMzFlYjMwYTYtNWY5Ni00ODJkLWFjMjAtMGMyZDYzYWIyNDhmIiwiZW1haWwiOiJhc2FoaV95YW1hZGFAbnVjby5jby5qcCJ9.sautJa30xLGJg6B721VrbjO177KKq45fKZKn3sTVof5Rbbk7cQleF0SMD-DTMa5Wce0ZxKTgfM6mDw3YFJ8YGJyxCd-yU2XGvAMbr2zGZOxOHbxz4kx98kxRBlohdXfUbsGSEIevhOaAisjLla0eQCNSzS3KM81glHbpOJu-1phOrepEp_QgE7aiQulr63R2o6fFU6vAJ4BRY8ifxGwpBgpId88XmDl7suHyJNkfjNhFL5bUU0QtWINoyKXRGh3rCd7IRYIc4OsDyZHbGftaNVKUUSBoWT3I-DRZ0YXL58HoSWCLvr_nDgtf92C0KrN32g1zs3erDPyWWclbtZxbjQ&access_token=eyJraWQiOiJuaEMwcmRPQ2dIbmdaTHYySWx2R3JNNWh1OE1IOTBpT3d0bWxmMlpsTW5nPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIzNzQ0NmFhOC1jMDMxLTcwYzUtYWJkZi02YzNiNDhhYjkzNTQiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIiwiYXV0aF90aW1lIjoxNzEzMzQ1OTc3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfS3pzNkg0RmgxIiwiZXhwIjoxNzEzMzQ5NTc3LCJpYXQiOjE3MTMzNDU5NzcsInZlcnNpb24iOjIsImp0aSI6IjU4ZjEzODAzLWE4ZTEtNGY3MS05YjM1LTA3MGJiZDM4MDY1OSIsImNsaWVudF9pZCI6IjVqdTd1b3IxYjYyOWplazV0Nmx2a2lsdGxqIiwidXNlcm5hbWUiOiJudWNvLXRlc3QxIn0.VxEgGgT4MYa6VflB3tDcjTklWir4Y2PB0pX6KFN2dQdhwla7Ezunpb0RPRTtTcW7_2uCCobH8nXaerbEyAtt54vNO4LL8V8yYn93oAyTGNWXWMmgTgfas8siXIEq8-JReS2OaVD2zyUgzQw21urjrzw9V0VrrCKiuItFdFuOM7YknUpfJBCUqhXA2mxf--4nq0AfO4hO01nfRGjDRGSllVTDDlzp7KFUvfppATEZ1LTatbArtGfSZMTkZGlVsfjbxEgq8i-bSqBS69Vpt_oM3KSdYiJDWpXF8R6l2cCLK6I_K0afCM3v3D7Uagn7subX-SP9if-sxrrlYVLj2l3jNw&expires_in=3600&token_type=Bearer";
    window.location.href = url;
}


async function getQuickSightInfo(openIdToken) {
    try {
        const parameters = {
            openIdToken: openIdToken
        };

        const myQueryString = $.param(parameters);

        // ダッシュボードリストの取得
        const dashboardListResponse = await fetch(awsData.apiGatewayUrl + '?mode=getDashboardList&' + myQueryString);
        const dashboardListResult = await dashboardListResponse.json();
        loadDashboardList(dashboardListResult.Dashboards);
        setCookie('QSEmbedDemo', JSON.stringify({openIdToken: dashboardListResult.openIdToken, expiryTs: dashboardListResult.expiryTs}), parseInt(dashboardListResult.expiryTs - Date.now() / 1000));
        checkSessionDuration();

        // ダッシュボードの埋め込みURLの取得
        const dashboardUrlResponse = await fetch(awsData.apiGatewayUrl + '?mode=getUrl&urlType=dashboard&' + myQueryString);
        const dashboardUrlResult = await dashboardUrlResponse.json();
        console.log(dashboardUrlResult);
    } catch (error) {
        console.log('API gatewayコールにてエラーが発生しました:', error);
    }
}

function setCookie(name, value) {
    console.log('In setCookie func');
    document.cookie = name + "=" + value +"; Max-Age=3600; SameSite=Strict";
  }


