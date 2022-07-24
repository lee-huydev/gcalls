import { Frame } from './styles/styles'
export default function Button({Icon ,...Props}) {
    return (
        <Frame {...Props}>
            <Icon />
        </Frame>
    )
}