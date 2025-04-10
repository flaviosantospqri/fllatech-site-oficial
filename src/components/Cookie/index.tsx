"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./style.scss"
import Link from "next/link";

export const CookieConsent = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("cookie_consent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleConsent = (value: "accepted" | "rejected") => {
        Cookies.set("cookie_consent", value, { expires: 365 });
        localStorage.setItem("cookie_consent", value);
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="cookieContainer">
            <div className="cookieContent">
                <p>
                    Usamos cookies para melhorar sua experiência.{" "}
                    <Link href="/politica-de-privacidade" target="_blank">
                        Saiba mais
                    </Link>
                </p>
                <div className="buttons">
                    <button onClick={() => handleConsent("accepted")}>Aceitar</button>
                    <button onClick={() => handleConsent("rejected")}>Rejeitar</button>
                </div>
            </div>
        </div>
    );
};
