import styled from "styled-components";

const AllCharactersDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
`;

const SingleCharDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    padding: 2%;
    margin: 1%;
    text-align: center;
    border: 2px solid black;
    border-radius: 10px;
    background-color: rgba(207, 186, 225, 0.7);
     h2 {
        font-family: fantasy;
        color: purple;
    }
   img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    }
   p {
    color: #4b285c;
    }
`;


interface Character {
    name: string;
    imageUrl: string;
    _id: number;
    films: string[];
}

interface CharacterProps {
    data: Character[];
}
export default function DisneyCharacters(props:CharacterProps) {


    return (
        <AllCharactersDiv>
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char._id}>
                        <h2>{char.name}</h2>
                        <img src={char.imageUrl} alt={char.name} />
                        <p>Films:</p>
                        {
                            char.films.length === 0 //ternary if/else statement found in slides
                            ? <p>No films found</p>
                            : char.films.map((film: string) =>
                                <p key={film}>{film}</p>
                            )
                        }
                    </SingleCharDiv>
                )
            }
        </AllCharactersDiv>
    );

}