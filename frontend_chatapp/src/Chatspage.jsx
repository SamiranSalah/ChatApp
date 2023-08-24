import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('b2284ad2-a503-4b95-8818-d766d856e703', 
    props.user.username, 
    props.user.secret
    );

    return (
        <div style={ {height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps}  style= {{ height: '100%'}} />

        </div>
            
    )

}


export default ChatsPage