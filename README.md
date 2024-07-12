<!-- common -->
{% docs table__dummy_customer__000__desc %}
ダミー個人情報データのテーブル
{% enddocs %}
{% docs column__common__file_created_at_jst__000__desc %}
ファイル出力日時
{% enddocs %}
{% docs column__common____airbyte_emitted_at__000__desc %}
 airbyteからデータが出力された日時
{% enddocs %}

<!-- m_product -->
{% docs table__retail_core__m_product__000__desc %}
retail_coreで管理するm_product情報のデータ
{% enddocs %}
{% docs column__retail_core__m_product__product_id__000__desc %}
"製品を識別するためのユニークなID。システム内で製品を一意に識別するために使用される。"
{% enddocs %}
{% docs column__retail_core__m_product__name__000__desc %}
"製品の正式名称。製品を市場で識別するための名前。"
{% enddocs %}
{% docs column__retail_core__m_product__name_alias__000__desc %}
"製品の別名またはカタカナ表記。異なる市場や地域での製品呼称に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__best_cosme_flg__000__desc %}
"製品がベストコスメに選出されたかどうかを示すフラグ。0は未選出、1は選出を意味する。"
{% enddocs %}
{% docs column__retail_core__m_product__remarks__000__desc %}
"製品に関する追加情報や備考。特記事項や製品に関する補足説明に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__flg_delete__000__desc %}
"製品の論理削除状態を示すフラグ。0はアクティブ状態、1は削除済みを意味する。"
{% enddocs %}
{% docs column__retail_core__m_product__flg_export_target__000__desc %}
"データ同期対象かどうかを示すフラグ。外部システムへのデータ転送や同期の対象を示す。"
{% enddocs %}
{% docs column__retail_core__m_product__datetime_export__000__desc %}
"最後にデータが外部システムに同期された日時。同期プロセスの追跡に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__id_employee_insert__000__desc %}
"レコードを初めて登録した従業員のID。データ入力責任者の追跡に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__datetime_insert__000__desc %}
"レコードがシステムに初めて登録された日時。データ生成のタイムラインを追跡するために使用。"
{% enddocs %}
{% docs column__retail_core__m_product__id_employee_update__000__desc %}
"最後にレコードを更新した従業員のID。データ更新責任者の追跡に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__datetime_update__000__desc %}
"レコードが最後に更新された日時。データの最新性や更新履歴の追跡に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__at_cosme_item_id__000__desc %}
"製品が＠ｃｏｓｍｅで持つユニークなID。外部のコスメデータベースとの連携に使用。"
{% enddocs %}
{% docs column__retail_core__m_product__catalog_id__000__desc %}
"製品が属するカタログのID。製品カテゴリー分類や管理のために使用。"
{% enddocs %}

<!-- dtb_customer -->
{% docs table__cosme_shopping__dtb_customer__000__desc %}
cosme_shoppingで管理するdtb_customer情報のデータ
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__customer_id__000__desc %}
顧客ID
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__name01__000__desc %}
名前01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__name02__000__desc %}
名前02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__kana01__000__desc %}
かな01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__kana02__000__desc %}
かな02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__zip01__000__desc %}
郵便番号01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__zip02__000__desc %}
郵便番号02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__pref__000__desc %}
都道府県
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__addr01__000__desc %}
住所01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__addr02__000__desc %}
住所02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__email__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__email_mobile__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__tel01__000__desc %}
電話番号01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__tel02__000__desc %}
電話番号02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__tel03__000__desc %}
電話番号03
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__fax01__000__desc %}
FAX番号01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__fax02__000__desc %}
FAX番号02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__fax03__000__desc %}
FAX番号03
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__sex__000__desc %}
性別
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__job__000__desc %}
職業
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__birth__000__desc %}
誕生日
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__password__000__desc %}
パスワード
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__reminder__000__desc %}
リマインダー
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__reminder_answer__000__desc %}
リマインダー回答
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__secret_key__000__desc %}
シークレットキー
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__first_buy_date__000__desc %}
初回購入日時
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__last_buy_date__000__desc %}
最終購入日時
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__buy_times__000__desc %}
購入回数
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__buy_total__000__desc %}
購入金額
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__point__000__desc %}
ポイント
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__note__000__desc %}
備考
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__status__000__desc %}
ステータス
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__create_date__000__desc %}
作成日時
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__update_date__000__desc %}
更新日時
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__del_flg__000__desc %}
削除フラグ
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__cell01__000__desc %}
携帯番号01
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__cell02__000__desc %}
携帯番号02
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__cell03__000__desc %}
携帯番号03
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__mobile_phone_id__000__desc %}
端末ID
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__mailmaga_flg__000__desc %}
メルマガフラグ
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__default_payment__000__desc %}
デフォルト支払い方法
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__shop_id__000__desc %}
店舗ID
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__paygent_card__000__desc %}
ペイジェントカード
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__crank_id__000__desc %}
会員ランクID
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__rfm_r__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__rfm_f__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__rfm_m__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__cpm__000__desc %}

{% enddocs %}
{% docs column__cosme_shopping__dtb_customer__cosme_customer_code__000__desc %}
@cosme顧客コード
{% enddocs %}
{% docs column__cosme_shopping__dtb_customer___airbyte_dtb_customer_hashid__000__desc %}
 airbyteからデータが出力された時のハッシュID
{% enddocs %}