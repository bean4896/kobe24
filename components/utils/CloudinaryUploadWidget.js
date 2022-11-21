import {  useEffect, useRef } from 'react';

const CloudinaryUploadWidget = () => {
        const cloudinaryRef = useRef();
        const widgetRef = useRef();
        useEffect(() => {
            cloudinaryRef.current = window.cloudinary;
            widgetRef.current = cloudinaryRef.current.createUploadWidget(
                {
                    cloudName: 'damn4egye',
                    uploadPreset: 'kobe24',
                    sources: ['local', 'url', 'camera', 'image_search', 'instagram'],
                    // multiple: false,
                    // cropping: false,
                    // showSkipCropButton: false,
                    // showAdvancedOptions: true,
                    // showUploadMoreButton: false,
                    showPoweredBy: false,
                    styles: {
                        palette: {
                            window: '#FFFFFF',
                            sourceBg: '#FFFFFF',
                            windowBorder: '#90A0B3',
                            tabIcon: '#7e22ce',
                            inactiveTabIcon: '#7e22ce',
                            menuIcons: '#5A616A',
                            link: '#7e22ce',
                            action: '#7e22ce',
                            inProgress: '#0078FF',
                            complete: '#20B832',
                            error: '#EA2727',
                            textDark: '#000000',
                            textLight: '#FFFFFF'
                        },
                    }
                },function(error, result) {
                    if (!error && result && result.event === "success") {
                        console.log('Done! Here is the image info: ', result.info.secure_url);
                    }
                    // console.log(result);
                }
            );
        }, [])
        return (
            <div>
                 <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>  
                <button onClick={() => widgetRef.current.open()} className="btn bg-purple-700">Upload Image</button>
            </div>
                );
    }

 export default CloudinaryUploadWidget;
