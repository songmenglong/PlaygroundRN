import React from "react"
import { Image } from "react-native"

const TabIcon = (props) => {
    return (
        <Image
            style={{
                width: 20,
                height: 20,
            }}
            source={props.source}
        ></Image>
    )
}

export default TabIcon;