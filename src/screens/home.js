import React, { Component } from 'react';
import { Text } from 'react-native';
import { 
    Container,
    Header,
    Body,
    Title,
    Content,
    List, 
    ListItem
} from 'native-base';
import DataItem from '../components/list_item';

export class HomeScreen extends Component{ 
    constructor(props) {
        super(props);
        this.items = [
            {
                urlToImage: null,
                title: 'Image is null',
                description: 'This is how you fill up the shit with lots of other shit, so you dont have to do anything else.',
                source: 'BBC',
                publishedAt: Date.now()
            },
            {
                urlToImage: null,
                title: 'Image is null',
                description: 'This is how you fill up the shit with lots of other shit, so you dont have to do anything else.',
                source: 'BBC',
                publishedAt: Date.now()
            },
            {
                urlToImage: null,
                title: 'Image is null',
                description: 'This is how you fill up the shit with lots of other shit, so you dont have to do anything else.',
                source: 'BBC',
                publishedAt: Date.now()
            },
            {
                urlToImage: null,
                title: 'Image is null',
                description: 'This is how you fill up the shit with lots of other shit, so you dont have to do anything else.',
                source: 'BBC',
                publishedAt: Date.now()
            },
            {
                urlToImage: null,
                title: 'Image is null',
                description: 'This is how you fill up the shit with lots of other shit, so you dont have to do anything else.',
                source: 'BBC',
                publishedAt: Date.now()
            }
        ]

    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title children="newsApp" />
                    </Body>
                </Header>
                <Content contentContainerStyle={{ backgroundColor: '#CCCCCC'}} padder={false} >
                    <Text>Hello</Text>
                    <List 
                    dataArray={this.props.items} 
                    renderRow={(item) => {
                        return(
                            <ListItem> 
                                <DataItem data={item} />
                            </ListItem>
                        )
                    }}  
                    />
                </Content>
            </Container>


        )
    }

}