const useContacts = () => {
    const phone = `+7 (982) 540-26-87`
    const phoneLink = `tel:+79825402687`
    const telegramLink = `https://t.me/SergFroloff`
    const email = `stereohit@bk.ru`
    const emailLink = `mailto:stereohit@bk.ru`
    const city = `Нягань, Россия`

    function callPhone() {
        window.open(phoneLink, '_self');
    }

    return {phone, email, city, phoneLink, emailLink, callPhone, telegramLink}
}

export default useContacts