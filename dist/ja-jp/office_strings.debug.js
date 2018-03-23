/* Version: 16.0.9220.1000 */

Type.registerNamespace("Strings");
Strings.OfficeOM = function()
{
};
Strings.OfficeOM.registerClass("Strings.OfficeOM");
Strings.OfficeOM.L_APICallFailed = "API の呼び出しに失敗しました";
Strings.OfficeOM.L_APINotSupported = "API はサポートされていません";
Strings.OfficeOM.L_ActivityLimitReached = "アクティビティの制限に達しました。";
Strings.OfficeOM.L_AddBindingFromPromptDefaultText = "選択範囲を指定してください。";
Strings.OfficeOM.L_AddinIsAlreadyRequestingToken = "アドインは既にアクセス トークンを要求しています。";
Strings.OfficeOM.L_AddinIsAlreadyRequestingTokenMessage = "このアドインは既にアクセス トークンを要求しているため、操作に失敗しました。";
Strings.OfficeOM.L_ApiNotFoundDetails = "メソッドまたはプロパティ {0} は {1} の必須セットの一部であり、バージョン {2} では使用できません。";
Strings.OfficeOM.L_AppNameNotExist = "{0} のアドイン名が存在しません。";
Strings.OfficeOM.L_AppNotExistInitializeNotCalled = "アプリケーション {0} が存在しません。Microsoft.Office.WebExtension.initialize(app, reason) が呼び出されていません。";
Strings.OfficeOM.L_AttemptingToSetReadOnlyProperty = "読み取り専用プロパティ '{0}' を設定しようとしています。";
Strings.OfficeOM.L_BadSelectorString = "セレクターに渡された文字列は、正しく書式設定されていないか、サポートされていません。";
Strings.OfficeOM.L_BindingCreationError = "バインドの作成エラーが発生しました";
Strings.OfficeOM.L_BindingNotExist = "指定したバインドが存在しません。";
Strings.OfficeOM.L_BindingToMultipleSelection = "不連続の選択はサポートされていません。";
Strings.OfficeOM.L_BrowserAPINotSupported = "このブラウザーでは、要求された API はサポートされません。";
Strings.OfficeOM.L_CallbackNotAFunction = "コールバックの型は関数である必要がありますが、{0} でした。"
Strings.OfficeOM.L_CannotApplyPropertyThroughSetMethod = "プロパティ '{0}' の変更を、\"object.set\" メソッドを使用して適用することはできません。";
Strings.OfficeOM.L_CannotNavigateTo = "オブジェクトは、ナビゲーションがサポートされていない場所にあります。";
Strings.OfficeOM.L_CannotRegisterEvent = "イベント ハンドラーは登録できません。";
Strings.OfficeOM.L_CannotWriteToSelection = "現在の選択内容に書き込むことができません。";
Strings.OfficeOM.L_CellDataAmountBeyondLimits = "注意: 表のセルの数は 20,000 セル未満にすることをお勧めします。";
Strings.OfficeOM.L_CellFormatAmountBeyondLimits = "注意: Formatting API の呼び出しによって設定される書式設定のセットは 100 未満にすることをお勧めします。";
Strings.OfficeOM.L_CloseFileBeforeRetrieve = "現在のファイルで closeAsync を呼び出してから別のファイルを取得します。";
Strings.OfficeOM.L_CoercionTypeNotMatchBinding = "指定した強制型変換タイプは、このバインド タイプと互換性がありません。";
Strings.OfficeOM.L_CoercionTypeNotSupported = "指定した強制型変換タイプはサポートされていません。";
Strings.OfficeOM.L_ColIndexOutOfRange = "列インデックス値は許容範囲外です。列数より小さい値 (0 以上) を使ってください。";
Strings.OfficeOM.L_ConnectionFailureWithDetails = "要求はステータス コード {0}、エラー コード {1}、エラー メッセージ {2} で失敗しました";
Strings.OfficeOM.L_ConnectionFailureWithStatus = "要求はステータス コード {0} で失敗しました。";
Strings.OfficeOM.L_CustomFunctionDefinitionMissing = "関数の定義を表すこの名前を持つプロパティは、Excel.CustomFunctions 上に存在する必要があります。";
Strings.OfficeOM.L_CustomFunctionImplementationMissing = "関数の定義を表す Excel.CustomFunctions のこの名前を持つプロパティは、関数を実装する 'call' プロパティを含める必要があります。";
Strings.OfficeOM.L_CustomFunctionNameCannotSplit = "関数名には、空でない名前空間と空でない短い形式の名前を含める必要があります。";
Strings.OfficeOM.L_CustomFunctionNameContainsBadChars = "関数名には、文字、数字、アンダースコア、ピリオドのみを含めることができます。";
Strings.OfficeOM.L_CustomXmlError = "カスタム XML エラーが発生しました。";
Strings.OfficeOM.L_CustomXmlExceedQuotaMessage = "XPath では 1,024 項目までしか選択できません。";
Strings.OfficeOM.L_CustomXmlExceedQuotaName = "選択範囲の上限に達しました";
Strings.OfficeOM.L_CustomXmlNodeNotFound = "指定したノードが見つかりませんでした。";
Strings.OfficeOM.L_CustomXmlOutOfDateMessage = "データが最新ではありません。もう一度オブジェクトを取得してください。";
Strings.OfficeOM.L_CustomXmlOutOfDateName = "データは最新ではありません";
Strings.OfficeOM.L_DataNotMatchBindingSize = "指定したデータ オブジェクトは、現在の選択内容のサイズに一致しません。";
Strings.OfficeOM.L_DataNotMatchBindingType = "指定したデータ オブジェクトは、バインド タイプと互換性がありません。";
Strings.OfficeOM.L_DataNotMatchCoercionType = "指定したデータ オブジェクトは、現在の選択内容と互換性がありません。";
Strings.OfficeOM.L_DataNotMatchSelection = "指定したデータ オブジェクトは、現在の選択内容の形状または寸法と互換性がありません。";
Strings.OfficeOM.L_DataReadError = "データの読み取りエラーが発生しました";
Strings.OfficeOM.L_DataStale = "最新でないデータ";
Strings.OfficeOM.L_DataWriteError = "データの書き込みエラーが発生しました";
Strings.OfficeOM.L_DataWriteReminder = "データ書き込みのアラーム";
Strings.OfficeOM.L_DialogAddressNotTrusted = "URL のドメインはマニフェストの AppDomains 要素に含まれていません。";
Strings.OfficeOM.L_DialogAlreadyOpened = "このアドインには既にアクティブなダイアログ ボックスがあるため、操作は失敗しました。";
Strings.OfficeOM.L_DialogInvalidScheme = "この URL スキームはサポートされていません。代わりに HTTPS を使用します。";
Strings.OfficeOM.L_DialogNavigateError = "ダイアログ ナビゲーション エラー";
Strings.OfficeOM.L_DialogOK = "OK";
Strings.OfficeOM.L_DialogRequireHTTPS = "HTTP プロトコルはサポートされていません。代わりに HTTPS を使用します。";
Strings.OfficeOM.L_DisplayDialogError = "ダイアログ エラーを表示";
Strings.OfficeOM.L_DocumentReadOnly = "要求した操作は、現在のドキュメント モードでは許可されていません。";
Strings.OfficeOM.L_ElementMissing = "表のセルを書式設定できませんでした。一部のパラメーター値が設定されていません。パラメーターを再確認し、もう一度お試しください。";
Strings.OfficeOM.L_EventHandlerAdditionFailed = "イベント ハンドラーを追加できませんでした。";
Strings.OfficeOM.L_EventHandlerNotExist = "指定したイベント ハンドラーは、このバインドでは見つかりません。";
Strings.OfficeOM.L_EventHandlerRemovalFailed = "イベント ハンドラーを削除できませんでした。";
Strings.OfficeOM.L_EventRegistrationError = "イベントの登録エラーが発生しました";
Strings.OfficeOM.L_FileTypeNotSupported = "指定されたファイルの種類はサポートされていません。";
Strings.OfficeOM.L_FormatValueOutOfRange = "値が許容範囲外です。";
Strings.OfficeOM.L_FormattingReminder = "書式設定の確認";
Strings.OfficeOM.L_FunctionCallFailed = "関数 {0} の呼び出しに失敗しました。エラー コード: {1}。";
Strings.OfficeOM.L_GetDataIsTooLarge = "要求したデータ セットはサイズが大きすぎます。";
Strings.OfficeOM.L_GetDataParametersConflict = "指定されたパラメーターが競合しています。";
Strings.OfficeOM.L_GetSelectionNotSupported = "現在の選択内容はサポートされていません。";
Strings.OfficeOM.L_HostError = "ホスト エラーが発生しました";
Strings.OfficeOM.L_InValidOptionalArgument = "オプションの引数が無効です";
Strings.OfficeOM.L_IndexOutOfRange = "インデックスが範囲外です。";
Strings.OfficeOM.L_InitializeNotReady = "Office.js は完全に読み込まれていません。後でやり直すか、Office.initialize 機能への初期化コードの追加を確認してください。";
Strings.OfficeOM.L_InternalError = "内部エラーが発生しました";
Strings.OfficeOM.L_InternalErrorDescription = "内部エラーが発生しました。";
Strings.OfficeOM.L_InvalidAPICall = "API 呼び出しが無効です";
Strings.OfficeOM.L_InvalidApiArgumentsMessage = "入力引数が無効です。";
Strings.OfficeOM.L_InvalidApiCallInContext = "現在のコンテキストに無効な API 呼び出しがあります。";
Strings.OfficeOM.L_InvalidArgument = "引数 '{0}' は、この状況では機能しないか、欠落している、または適切な形式ではありません。";
Strings.OfficeOM.L_InvalidArgumentGeneric = "関数に渡された引数が、この状況では機能しないか、不足しているか、形式の誤りがあります。";
Strings.OfficeOM.L_InvalidBinding = "無効なバインド";
Strings.OfficeOM.L_InvalidBindingError = "無効なバインド エラー";
Strings.OfficeOM.L_InvalidBindingOperation = "無効なバインドの操作";
Strings.OfficeOM.L_InvalidCellsValue = "1 つ以上の cells パラメーターに、許可されていない値が設定されています。値を再確認し、もう一度お試しください。";
Strings.OfficeOM.L_InvalidCoercion = "強制変換タイプが無効です";
Strings.OfficeOM.L_InvalidColumnsForBinding = "指定された列が無効です。";
Strings.OfficeOM.L_InvalidDataFormat = "指定したデータ オブジェクトの形式は無効です。";
Strings.OfficeOM.L_InvalidDataObject = "データ オブジェクトが無効です";
Strings.OfficeOM.L_InvalidFormat = "無効な形式のためにエラーが発生しました";
Strings.OfficeOM.L_InvalidFormatValue = "1 つ以上の format パラメーターに、許可されていない値が設定されています。値を再確認し、もう一度お試しください。";
Strings.OfficeOM.L_InvalidGetColumns = "指定された列が無効です。";
Strings.OfficeOM.L_InvalidGetRowColumnCounts = "指定した rowCount または columnCount の値は無効です。";
Strings.OfficeOM.L_InvalidGetRows = "指定された行が無効です。";
Strings.OfficeOM.L_InvalidGetStartRowColumn = "指定した startRow または startColumn の値は無効です。";
Strings.OfficeOM.L_InvalidGrant = "事前認証がありません。";
Strings.OfficeOM.L_InvalidGrantMessage = "このアドインのアクセス許可が不足しています。";
Strings.OfficeOM.L_InvalidNamedItemForBindingType = "指定したバインド タイプは、指定した名前付きアイテムと互換性がありません。";
Strings.OfficeOM.L_InvalidNode = "無効なノード";
Strings.OfficeOM.L_InvalidObjectPath = 'この操作ではオブジェクト パス \'{0}\' は機能しません。オブジェクトを複数の "context.sync" 呼び出し間で使用している場合、また ".run" バッチの逐次実行以外で使用している場合は、オブジェクトの有効期間の管理には "context.trackedObjects.add()" と "context.trackedObjects.remove()"メソッドを使用してください。';
Strings.OfficeOM.L_InvalidOperationInCellEditMode = "Excel はセル編集モードです。Enter キーまたは Tab を押すか、別のセルを選択して編集モードを終了し、もう一度お試しください。";
Strings.OfficeOM.L_InvalidOrTimedOutSession = "セッションが無効であるか、タイムアウトになりました";
Strings.OfficeOM.L_InvalidOrTimedOutSessionMessage = "Office オンライン セッションの期限が切れたか、無効です。続けるには、ページを更新してください。";
Strings.OfficeOM.L_InvalidParameters = "関数 {0} に無効なパラメーターが含まれています。";
Strings.OfficeOM.L_InvalidReadForBlankRow = "指定された行は空白です。";
Strings.OfficeOM.L_InvalidRequestContext = "異なる要求のコンテキスト間でオブジェクトを使用することはできません。";
Strings.OfficeOM.L_InvalidResourceUrl = "無効なアプリケーション リソースの URL が入力されました。";
Strings.OfficeOM.L_InvalidResourceUrlMessage = "マニフェストで指定されたリソースの URL が無効です。";
Strings.OfficeOM.L_InvalidSSOAddinMessage = "ID API はこのアドインでサポートされていません。";
Strings.OfficeOM.L_InvalidSelectionForBindingType = "現在の選択内容と指定したバインド タイプでは、バインドは作成できません。";
Strings.OfficeOM.L_InvalidSetColumns = "指定された列が無効です。";
Strings.OfficeOM.L_InvalidSetRows = "指定された行が無効です。";
Strings.OfficeOM.L_InvalidSetStartRowColumn = "指定した startRow または startColumn の値は無効です。";
Strings.OfficeOM.L_InvalidTableOptionValue = "1 つ以上の tableOptions パラメーターに、許可されていない値が設定されています。値を再確認し、もう一度お試しください。";
Strings.OfficeOM.L_InvalidValue = "無効な値";
Strings.OfficeOM.L_MemoryLimit = "メモリの制限を超えました";
Strings.OfficeOM.L_MissingParameter = "パラメーターがありません";
Strings.OfficeOM.L_MissingRequiredArguments = "いくつかの必須の引数が指定されていません";
Strings.OfficeOM.L_MultipleNamedItemFound = "同じ名前の複数のオブジェクトが見つかりました。";
Strings.OfficeOM.L_NamedItemNotFound = "名前付きアイテムが存在しません。";
Strings.OfficeOM.L_NavOutOfBound = "インデックスが範囲外のため、操作が失敗しました。";
Strings.OfficeOM.L_NetworkProblem = "ネットワークの問題";
Strings.OfficeOM.L_NetworkProblemRetrieveFile = "ネットワークに問題が発生し、ファイルを取得できません。";
Strings.OfficeOM.L_NewWindowCrossZone = "ブラウザーのセキュリティ設定により、ダイアログ ボックスを作成することができませんでした。別のブラウザーを試すか、{0} してアドレス バーに表示される '{1}' とドメインが同じセキュリティ ゾーンに存在するようにしてください。";
Strings.OfficeOM.L_NewWindowCrossZoneConfigureBrowserLink = "ブラウザーを構成する";
Strings.OfficeOM.L_NewWindowCrossZoneErrorString = "ブラウザーの制限により、ダイアログ ボックスを作成できませんでした。ダイアログ ボックスのドメインとアドイン ホストのドメインが同じセキュリティ ゾーン内にありません。";
Strings.OfficeOM.L_NoCapability = "この操作を実行するための十分な権限がありません。";
Strings.OfficeOM.L_NonUniformPartialGetNotSupported = "結合されたセルがテーブルに含まれている場合、強制型変換タイプのテーブルで座標パラメーターを使用することはできません。";
Strings.OfficeOM.L_NonUniformPartialSetNotSupported = "結合されたセルがテーブルに含まれている場合、強制型変換タイプのテーブルで座標パラメーターを使用することはできません。";
Strings.OfficeOM.L_NotImplemented = "関数 {0} は実装されていません。";
Strings.OfficeOM.L_NotSupported = "関数 {0} はサポートされていません。";
Strings.OfficeOM.L_NotSupportedBindingType = "指定したバインド タイプ {0} はサポートされていません。";
Strings.OfficeOM.L_NotSupportedEventType = "指定したイベント タイプ {0} はサポートされていません。";
Strings.OfficeOM.L_OperationCancelledError = "操作は取り消されました";
Strings.OfficeOM.L_OperationCancelledErrorMessage = "操作はユーザーによって取り消されました。";
Strings.OfficeOM.L_OperationNotSupported = "操作はサポートされていません。";
Strings.OfficeOM.L_OperationNotSupportedOnMatrixData = "選択した内容は表形式でなければなりません。データを表形式に書式設定してから、やり直してください。";
Strings.OfficeOM.L_OperationNotSupportedOnThisBindingType = "このバインド タイプではサポートされてない操作です。";
Strings.OfficeOM.L_OsfControlTypeNotSupported = "OsfControl の型はサポートされていません。";
Strings.OfficeOM.L_OutOfRange = "範囲外";
Strings.OfficeOM.L_OverwriteWorksheetData = "指定したデータ オブジェクトがデータを上書きまたは移動するため、設定操作は失敗しました。";
Strings.OfficeOM.L_PermissionDenied = "権限が拒否されました";
Strings.OfficeOM.L_PropertyDoesNotExist = "プロパティ '{0}' はこのオブジェクトに存在しません。";
Strings.OfficeOM.L_PropertyNotLoaded = "プロパティ '{0}' は使用できません。プロパティの値を読み取る前に、格納しているオブジェクトの load メソッドを呼び出し、関連付けられている要求のコンテキストで \"context.sync()\" を呼び出してください。";
Strings.OfficeOM.L_ReadSettingsError = "設定の読み取りエラーが発生しました";
Strings.OfficeOM.L_RedundantCallbackSpecification = "コールバックを引数リストと省略可能オブジェクトの両方で指定することはできません。";
Strings.OfficeOM.L_RequestTimeout = "呼び出しに時間がかかりすぎたため、実行できませんでした。";
Strings.OfficeOM.L_RequestTokenUnavailable = "この API は、呼び出し頻度が低下するように調整されました。";
Strings.OfficeOM.L_RowIndexOutOfRange = "行インデックス値は許容範囲外です。行数より小さい値 (0 以上) を使ってください。";
Strings.OfficeOM.L_RunMustReturnPromise = '".run" メソッドに渡されたバッチ関数から Promise が返されませんでした。関数が Promise を返す必要があるのは、自動的にトラッキングされるオブジェクトをバッチ操作の完了時に解放できるようにするためです。一般的に、Promise を返すには "context.sync()" からの応答を返します。';
Strings.OfficeOM.L_SSOClientError = "Office からの認証要求でエラーが発生しました。";
Strings.OfficeOM.L_SSOClientErrorMessage = "クライアント内で予期しないエラーが発生しました。";
Strings.OfficeOM.L_SSOConnectionLostError = "サインイン処理中に接続が失われました。";
Strings.OfficeOM.L_SSOConnectionLostErrorMessage = "サインイン処理中に接続が失われ、ユーザーはサインインしていない可能性があります。これは、ユーザーのブラウザー構成の設定が原因の可能性があります。";
Strings.OfficeOM.L_SSOServerError = "認証プロバイダーでエラーが発生しました。";
Strings.OfficeOM.L_SSOServerErrorMessage = "サーバーで予期しないエラーが発生しました。";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategory = "このアドインは、ユーザーの同意をサポートしていません。";
Strings.OfficeOM.L_SSOUserConsentNotSupportedByCurrentAddinCategoryMessage = "このアドインはこのカテゴリのユーザーの同意をサポートしていないため、操作が失敗しました";
Strings.OfficeOM.L_SaveSettingsError = "設定の保存エラーが発生しました";
Strings.OfficeOM.L_SelectionCannotBound = "現在の選択内容にバインドできません。";
Strings.OfficeOM.L_SelectionNotSupportCoercionType = "現在の選択内容は、指定した強制型変換タイプと互換性がありません。";
Strings.OfficeOM.L_SetDataIsTooLarge = "指定されたデータ オブジェクトが大きすぎます。";
Strings.OfficeOM.L_SetDataParametersConflict = "指定されたパラメーターが競合しています。";
Strings.OfficeOM.L_SettingNameNotExist = "指定した設定名が存在しません。";
Strings.OfficeOM.L_SettingsAreStale = "設定が最新ではないため、保存できませんでした。";
Strings.OfficeOM.L_SettingsCannotSave = "設定を保存できませんでした。";
Strings.OfficeOM.L_SettingsStaleError = "古い設定のためエラーが発生しました";
Strings.OfficeOM.L_ShowWindowDialogNotification = "{0} のため新しいウィンドウを表示しようとしています。";
Strings.OfficeOM.L_ShowWindowDialogNotificationAllow = "許可";
Strings.OfficeOM.L_ShowWindowDialogNotificationIgnore = "無視";
Strings.OfficeOM.L_ShuttingDown = "サーバー上のデータが最新ではないため、操作は失敗しました。";
Strings.OfficeOM.L_SliceSizeNotSupported = "指定したスライスのサイズはサポートされていません。";
Strings.OfficeOM.L_SpecifiedIdNotExist = "指定された ID が存在しません。";
Strings.OfficeOM.L_Timeout = "処理がタイムアウトしました。";
Strings.OfficeOM.L_TooManyArguments = "引数が多すぎます";
Strings.OfficeOM.L_TooManyIncompleteRequests = "前の呼び出しが完了するまで待機します。";
Strings.OfficeOM.L_TooManyOptionalFunction = "複数のオプションの機能がパラメーター リスト内にあります";
Strings.OfficeOM.L_TooManyOptionalObjects = "複数のオプションのオブジェクトがパラメーター リスト内にあります";
Strings.OfficeOM.L_UnknownBindingType = "このバインド タイプはサポートされていません。";
Strings.OfficeOM.L_UnsupportedDataObject = "指定したデータ オブジェクト型はサポートされていません。";
Strings.OfficeOM.L_UnsupportedEnumeration = "サポートされていない列挙";
Strings.OfficeOM.L_UnsupportedEnumerationMessage = "現在のホスト アプリケーションでは、列挙はサポートされていません。";
Strings.OfficeOM.L_UnsupportedUserIdentity = "ユーザー ID の種類はサポートされていません。";
Strings.OfficeOM.L_UnsupportedUserIdentityMessage = "ユーザーの ID の種類はサポートされていません。";
Strings.OfficeOM.L_UserAborted = "ユーザーは承認要求を取り消しました。";
Strings.OfficeOM.L_UserAbortedMessage = "ユーザーがアドインのアクセス許可に同意しませんでした。";
Strings.OfficeOM.L_UserClickIgnore = "ダイアログ ボックスを無視するようにユーザーが選択しました。";
Strings.OfficeOM.L_UserNotSignedIn = "Office にサインイン済みのユーザーはいません。";
Strings.OfficeOM.L_ValueNotLoaded = '結果のオブジェクトの値はまだ読み込まれていません。Value プロパティを読み取る前に、関連付けられている要求のコンテキストで "context.sync()" を呼び出します。';