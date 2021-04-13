import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import NewsApi from '../api/NewsApi';
import Card from '../components/Card';
import SelectionTabs from '../components/SelectionTabs';

function News({ navigation }) {
    const [news, setNews] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        getNewsFromAPI()
    }, [])


    function getNewsFromAPI() {
        NewsApi.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
            .then(async function (response) {
                setNews(response.data);
                setRefreshing(false)
            })
            .catch(function (error) {
                alert(error)
            })
    }

    if (!news) {
        return null;
    }
    const handleRefresh = () =>{
        setRefreshing(true)
        getNewsFromAPI()
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.selection}>
                
            </View>
            <FlatList
                data={news.articles}
                keyExtractor={(item, index) => index.toString()}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                renderItem={({ item }) => (
                    <Card
                        urlToImage={item.urlToImage}
                        author={item.author}
                        title={item.title}
                        onPress={() => navigation.navigate("NewsDetails", item)}

                    />
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    selection: {
        flexDirection: 'row'
    }
})

export default News;