
import HomeSkeleton from './components/homeSkeleton';
import { 
  Title, 
  Text,
  Input,
  Button 
} from '@ui5/webcomponents-react';
import '@ui5/webcomponents/dist/features/InputSuggestions.js';

import './home.scss'

function Home() {

  return (
    <>
      <Title>
        Film Hunter
      </Title>

      <Text
        style={{margin: '2rem'}}
      >
        This option denotes a powerful tool for users to explore and discover movies. It functions as an efficient and robust search system that allows users to find and retrieve information about movies, making the process of searching for films straightforward and effective. It's like a specialized engine designed to help users search for, filter, and access movie-related data, providing a comprehensive and user-friendly experience.
      </Text>
      <div className="serch-container">
        <div>
          <Input
            onChange={function Ta(){}}
            onInput={function Ta(){}}
            onSuggestionItemPreview={function Ta(){}}
            onSuggestionItemSelect={function Ta(){}}
            placeholder='Enter movie title'
            style={{
              width: '50vw'
            }}
          />
        </div>
        <div className="buttons-container">
          <Button
            design="Emphasized"
            onClick={function Ta(){}}
            style={{marginLeft: '1rem', marginRight: '1rem'}}
          >
            Search
          </Button>

          <Button
            design="Default"
            onClick={function Ta(){}}
          >
            Reset
          </Button>

        </div>
      </div>
      <HomeSkeleton/>
    </>
  )
}

export default Home
