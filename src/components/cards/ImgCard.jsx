import React, {useEffect, useState} from 'react';
import {PermissionsAndroid, StyleSheet} from 'react-native';
import {Image, Text, View, TouchableOpacity, Platform} from 'react-native';
import {colors} from '../../constants/color';

import RNFetchBlob from 'rn-fetch-blob';

const ImgCard = props => {
  const [imageUrl, setImageUrl] = useState(props.download);

  useEffect(()=>{
    setImageUrl(props.download)
  },[props.download])

  // const checkPermission = async () => {
  //   if (Platform.OS === 'ios') {
  //     downloadImage();
  //   } else {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'Storage Permission Required',
  //           message: 'App needs access to your storage to download Photos',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         // Once user grant the permission start downloading
  //         console.log('Storage Permission Granted.');
  //         downloadImage();
  //       } else {
  //         // If permission denied then show alert
  //         alert('Storage Permission Not Granted');
  //       }
  //     } catch (err) {
  //       // To handle permission related exception
  //       console.warn(err);
  //     }
  //   }
  // };

  const downloadImage = () => {
    let date = new Date();

    let ext = getExtention(imageUrl);

    const {config, fs} = RNFetchBlob;

    let PictureDir = fs.dirs.PictureDir;

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', imageUrl)
      .then(res => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = filename => {
    // To get the file extension
    // return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : '.jpg';
    return '.jpg';
  };

  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.imgDisp}>
        <Image
          source={{uri: props.URL}}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </View>
      <View style={cardStyles.imgDetails}>
        <View style={cardStyles.imgLikes}>
          <Text style={{marginRight: 4}}>500</Text>
          <Text>Downloads</Text>
        </View>
        <TouchableOpacity onPress={downloadImage} style={cardStyles.button}>
          <Text style={{}}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 15,
  },
  imgDisp: {
    width: '100%',
    overflow: 'scroll',
    height: 206,
  },
  imgDetails: {
    width: '100%',
    height: 60,
    backgroundColor: colors.subBg,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  imgLikes: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: 150,
    height: '85%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.button,
  },
});

export default ImgCard;
