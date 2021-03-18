import React, { useState, useEffect } from 'react';
import BasicLayout from "../layouts/BasicLayout";
import { useRouter } from "next/router";
import { getGameByUrlapi } from "../api/game";
import HeaderGame from "../components/Game/HeaderGame";
import TabsGame from "../components/Game/TabsGame";
import Seo from "../components/Seo";

export default function Game() {
    const [game, setGame] = useState(null);   
    const { query } = useRouter(); 

    useEffect(() => {
        (async () => {
            const response = await getGameByUrlapi(query.game);
            setGame(response);
        })()
    }, [query])

    if(!game) return null;

    return (
        <BasicLayout className="game">
            <Seo title={game.title} />
            <HeaderGame game={game} />
            <TabsGame game={game} />
        </BasicLayout>
    )
}
