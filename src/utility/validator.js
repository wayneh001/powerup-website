export default {
    required(value) {
        if (!value) {
            return '請填寫此欄位';
        }
        if (value.length === 0) {
            return '請填寫此欄位';
        }
        return true;
    },
    requiredPhone(value) {
        if (!value) {
            return '請填寫此欄位';
        }
        if (value.length === 0) {
            return '請填寫此欄位';
        }
        if (!/^[0-9]*$/g.test(value)) {
            return '電話號碼格式錯誤';
        }
        return true;
    },
    requiredEmail(value) {
        if (!value) {
            return '請填寫此欄位';
        }
        if (value.length === 0) {
            return '請填寫此欄位';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            return '電子郵件格式錯誤';
        }
        return true;
    },
};