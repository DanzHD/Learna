import Text from "../../Common/Components/Text/Text.tsx";

export default function Contact() {



    return (
        <section className="contact">
            <Text className="contact__header" bold heading>Contact Us</Text>
            <Text>Have a question or feedback? Feel free to contact us </Text>
            <div >

                <Text className="contact__send-email">Send Email</Text>
            </div>
        </section>
    )
}