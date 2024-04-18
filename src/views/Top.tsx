// Top.tsx

import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import QuickSightButton from './QuickSightButton';
import './Signin.css'; // スタイルシートをインポート
import axios from 'axios';

interface LinkItem {
    key: string;
    url: string;
}

var quickSightLinks: LinkItem[] = [
    { key: '分析1類', url: 'https://vnkohfbsjd.execute-api.ap-northeast-1.amazonaws.com/test/embed-sample' },
    { key: '分析2類', url: 'https://aazdidja9b.execute-api.ap-northeast-1.amazonaws.com/test/embed' },
    { key: '分析3類', url: '' },
    { key: '分析4類', url: 'https://ap-northeast-1.quicksight.aws.amazon.com/sn/accounts/905418066697/dashboards/c25166d0-1a22-4f95-9b33-e444c3a29d04?directory_alias=yamda-nuco' }
];
const updateLinkByKey = (key: string, newUrl: string) => {
    const linkItem = quickSightLinks.find(item => item.key === key);
    if (linkItem) {
        linkItem.url = newUrl;
    }
};

const Top: React.FC = () => {
    const currentUrl = window.location.href;
    const searchString = 'id_token';
    const idToken = currentUrl.includes(searchString);

   // idtokenが存在する場合は画面表示
    if (idToken) {
      console.log('idtoken見つかりました');
    } else {
      console.log('idtokenが見つかりませんでした');
      window.location.href = "https://056851111806.auth.ap-northeast-1.amazoncognito.com/login?client_id=5ju7uor1b629jek5t6lvkiltlj&response_type=token&scope=openid+profile&redirect_uri=http://localhost:3000"
      //window.location.href = "https://056851111806.auth.ap-northeast-1.amazoncognito.com/login?client_id=5ju7uor1b629jek5t6lvkiltlj&response_type=token&scope=openid+profile&redirect_uri=https://d3kj64uymbfl6p.cloudfront.net"
       }

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }

    var url = window.location.href
    const hash = url.split('#')[1];
    const params = new URLSearchParams(hash);
    const openIdToken = params.get('id_token');

    const apiGateUrl = "https://aazdidja9b.execute-api.ap-northeast-1.amazonaws.com/test/embed/"

    const apiGetUrl =  apiGateUrl + '?mode=getUrl&urlType=dashboard&openIdToken=' + openIdToken
    const apiGetUrlList =  apiGateUrl + '?mode=getDashboardList&openIdToken=' + openIdToken 
    updateLinkByKey("分析3類",apiGetUrl)
    updateLinkByKey("分析4類",apiGetUrlList)

    var baseEmbedUrl = ''
    var boardUrl = ''
    
    fetch(apiGetUrl)
        .then(response  => {
        //if (!response.ok) {
         //       throw new Error('ネットワークレスポンスが正常ではありません');
         //     }
    
            return response.json();
        })
        .then(data =>{
    
            const parsedData = data.DashboardEmbedUrl;
            //const pattern = /https:\/\/ap-northeast-1.quicksight.aws.amazon.com\/embed\/([a-zA-Z0-9]+)\/dashboards\//;
            baseEmbedUrl = parsedData//.match(pattern)[0];
            updateLinkByKey('分析1類',baseEmbedUrl)
    
        })
        //.catch(error => {
        //    // エラーが発生した場合の処理
         //   console.error('There was a problem with your fetch operation:', error);
        //  });
    
    
    
    fetch(apiGetUrlList)
        .then(response => {

            return response.json();
        })
        .then(data => {
            console.log(data.Dashboards);
            //url = baseEmbedUrl + data.Dashboards[0].DashboardId
            url = baseEmbedUrl.replace('non-existent-id',data.Dashboards[1].DashboardId);
            console.log(url)
            updateLinkByKey("分析2類",url)
        })
        //.catch(error => {
        //    // エラーが発生した場合の処理
        //    console.error('There was a problem with your fetch operation:', error);
        //});



    return (
        <div className="container">

            <div className="content">
                <h1>Top Sight</h1>
                <div className="grid-container">
                    {quickSightLinks.map((link, index) => (
                        <div key={index} className="grid-item">
                            <QuickSightButton links={[link]} />
                        </div>
                    ))}
                </div>
                <div className = 'loginButton'>
                    <button onClick={handleLogout} >ログアウト</button>
                </div>
               
            </div>
        </div>
    );
}

export default Top;

