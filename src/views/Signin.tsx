//Signin.tsx
import { useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from "react-router-dom";
import './Signin.css';

//型宣言
type Inputs = {
    username: string;
    password: string;
}

export default function Signin() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("")
    
    const {
        register,//各フィールドの入力値と値のルールを関連付ける
        handleSubmit,//送信イベント(1.dataもらってチェック関数に値を渡す)
        reset,//
        formState: { errors }
    } = useForm<Inputs>({
        mode: 'onChange',//情報入力→送信(引き渡し)
    });
    
    //１.dataをもらってチェック
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        console.log(data);
        if (data.username === "nuco" && data.password === "nuco"){  //仮ID・パスワード
            loginSuccess();
        }else{
            loginErrorMsg();
        }
        reset();
    };
    
    //2.a 成功したら~/Topページに遷移
    const loginSuccess = () => {
        navigate("/Top");
    }

    //2.b 失敗したらエラーメッセージの出力
    //・シンプルにパスの組み合わせを間違えた場合
    //・入力方法が間違っている場合は別の段階でエラーを吐いている
    //追加機能:pass忘れた場合とか
    const loginErrorMsg = () => {
        //setErrorMsg()でerrorMsgの値を更新
        setErrorMsg("ユーザーIDもしくはパスワードが間違っています。");
    }
    
    //5.入力内容をクリア
    const clearForm = () => {
        reset();
    }

    return (
        <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>ログイン</h1>
            <hr />
            
            <div className='uiForm'>
            <p className="errorMsg">{errorMsg}</p>
                <div className='formField'>
                    <label htmlFor="userID">ユーザーID</label>
                    <input 
                        id = "userID"
                        type="text" 
                        placeholder='userID' 
                        {...register('username', { 
                            //register関数でインプットを参照
                            required: 'ユーザーIDを入力してください。', 
                            maxLength: {
                                value: 20,
                                message: '20文字以内で入力してください。'
                            },
                            pattern: {
                                value:
                                    /^[A-Za-z0-9-]+$/i,
                            message: 'ユーザーIDの形式が不正です。',
                            }, 
                        })}
                    />
                </div>
                <ErrorMessage errors={errors} name="username" render={({message}) => <span>{message}</span>} />
                <div className='formField'>
                    <label htmlFor="password">パスワード</label>
                    <input 
                        id = "password"
                        type="password" 
                        placeholder='password' 
                        role = 'password'
                        {...register('password', { 
                            //register関数でインプットを参照
                            required: 'パスワードを入力してください。', 
                            maxLength: {
                                value: 20,
                                message: '20文字以内で入力してください',
                            },
                            pattern: {
                                value:
                                    /^[A-Za-z0-9]+$/i,
                            message: 'パスワードの形式が不正です。',
                            }, 
                        })} 
                    />
                </div>
                <ErrorMessage errors={errors} name="password" render={({message}) => <span>{message}</span>} />
                <div className="loginButton">
                    <button 
                        type = "submit"
                        className="submitButton"
                        >ログイン
                    </button>
                    <button 
                        type = "button"
                        className="clearButton" 
                        onClick={clearForm}
                        >クリア
                    </button>
                </div>
            </div>
        </form>
        </div>
  );
}