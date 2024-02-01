interface data {
    information: string,
    image: string,
    styles: {}
}

const appData: data[] = [
    {
        information: "The future is here, powered by AI.",
        image: 'https://raw.githubusercontent.com/syednomishah/AI-Voice-Assistant-React-Native/main/assets/images/welcome.png',
        styles: {
            height: 200,
            width: 200,
            marginBottom: 20,
            marginTop: 150
        }
    },
    {
        information: "You can talk to the AI ​​and the AI ​​responds by chat voice or images",
        image: 'https://uploads.turbologo.com/uploads/design/hq_preview_image/1385749/draw_svg20210625-19886-xh0lc.svg.png',
        styles: {
            height: 350,
            width: 350,
            marginBottom: 10,
            marginTop: 50
        }
    }
]

export default appData;
