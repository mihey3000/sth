const useContacts = () => {
    const phone = `+7 (982) 540-26-87`
    const phoneLink = `tel:+79825402687`
    const telegramLink = `https://t.me/ваш_username`
    const email = `info@stereohit.ru`
    const emailLink = `mailto:info@stereohit.ru`
    const city = `Нягань, Россия`

    function callPhone() {
        window.open(phoneLink, '_self');
    }

    return {phone, email, city, phoneLink, emailLink, callPhone}
}

export default useContacts