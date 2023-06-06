import './Team.css'
export default function Team(props) {

    return (
        <>
            <div id='teamHeader'><img src='https://cdn.discordapp.com/attachments/1105779457358315530/1113853476825464995/text-1685633732493.png'></img></div>
            <span id='stopScrollTeam'></span>
            <div id='teamWrapper'>
                <div id='teamItem'className='teamJarda'>
                    <div id='teamInfo' >
                        <div id='teamName'>
                            Jarda "Bílá síla" Novej
                        </div>
                        <div id='teamFunctions'>
                            Hlavní Programátor, průměrný občan ČR
                        </div>
                        <div id='teamText'>
                            Bílá síla mě zaslepila. Černou duši mi vybělila.
                        </div>
                    </div>
                </div>
                <div id='teamBottom'>
                    <div id='teamItem' className='teamJindra'>
                        <div id='teamInfo'>
                            <div id='teamName'>
                                Jindřich "Adolf Drippler" Šuba
                            </div>
                            <div id='teamFunctions'>
                                Zprostředkovatel, vůdce
                            </div>
                            <div id='teamText'>
                                Základem k úspěchu je úspěch.
                            </div>
                        </div>
                    </div>
                    <div id='teamItem' className='teamSima'>
                        <div id='teamInfo'>
                            <div id='teamName'>
                                Šimon "Sabotér" Tvrdý
                            </div>
                            <div id='teamFunctions'>
                                Oddělávač konkurence, Dobyvatel pravdy
                            </div>
                            <div id='teamText'>
                                Kdo jinému jámu kopá, tomu se z lesa ozývá.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
