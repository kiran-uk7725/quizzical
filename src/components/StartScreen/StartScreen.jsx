import { Main } from "@/layout";
import { Heading } from "@/ui";
import { StartScreenStyles } from "@/StartScreen";
import { Button } from "@/ui";

export default function StartScreen(){
    return(
        <Main className={`${StartScreenStyles.startScreen}`}>
            <Heading level={1}>Quizzical</Heading>
            <Heading level={2}>Some description if needed</Heading>
            <Button size="lg">Start quiz</Button>
        </Main>
    );
}