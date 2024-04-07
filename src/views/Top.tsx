import React from 'react';
import { useNavigate } from "react-router-dom";
import QuickSightButton from './QuickSightButton';
import './Signin.css'; // スタイルシートをインポート

export default function Top() {
    const navigate = useNavigate();
    
    const quickSightLinks = [
        { key: '分析1類', url: 'https://ap-northeast-1.quicksight.aws.amazon.com/sn/embed/share/accounts/905418066697/dashboards/e9c8c4a2-31db-448f-81ca-846479be3106?directory_alias=null' },
        { key: '分析2類', url: 'https://ap-northeast-1.quicksight.aws.amazon.com/sn/accounts/905418066697/dashboards/e4bf902b-8486-4bd9-b2e5-47992680273b?directory_alias=yamda-nuco' },
        { key: '分析3類', url: 'https://ap-northeast-1.quicksight.aws.amazon.com/sn/accounts/905418066697/dashboards/c25166d0-1a22-4f95-9b33-e444c3a29d04?directory_alias=yamda-nuco' },
        { key: '分析4類', url: 'https://ap-northeast-1.quicksight.aws.amazon.com/sn/accounts/905418066697/dashboards/c25166d0-1a22-4f95-9b33-e444c3a29d04?directory_alias=yamda-nuco' }
    ];

    return (
        <div className="container">
            <h1>Top Page</h1>
            <div className="grid-container">
                {quickSightLinks.map((link, index) => (
                    <div key={index} className="grid-item">
                        <QuickSightButton links={[link]} />
                    </div>
                ))}
            </div >
            <div className = "loginButton">
            <button 
                onClick={() => navigate('/')}
            >ログアウト
            </button>
            </div>
        </div>
    );
}
