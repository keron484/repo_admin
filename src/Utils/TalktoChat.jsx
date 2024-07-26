import { useEffect } from "react";
const TawktoChat = () => {
    useEffect(() => {

        var Tawk_API = Tawk_API||{}, Tawk_LoadStart=new Date();
        const script = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];

        script.async = true;
        script.src = 'https://embed.tawk.to/66a394b5becc2fed692b77f2/1i3nfq0sp';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(script, s0);
        
        window.Tawk_API = Tawk_API;
        window.Tawk_API.toggle = () => {
            Tawk_API.toggle();
        };
      
    });

    return null;
}

export default TawktoChat;