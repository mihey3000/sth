const useContacts = () => {
    const phone = `+7 (982) 540-26-87`
    const phoneLink = `tel:+79825402687`
    const telegramLink = `https://t.me/SergFroloff`
    const email = `sanger1985@yandex.ru`
    const emailLink = `mailto:sanger1985@yandex.ru`
    const city = `Нягань, Россия`

    function callPhone() {
        window.open(phoneLink, '_self');
    }

    return {phone, email, city, phoneLink, emailLink, callPhone, telegramLink}
}

export default useContacts