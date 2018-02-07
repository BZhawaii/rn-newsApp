import React, { PureComponent } from 'react';
import { 
    TouchableOpacity
 } from 'react-native';
 import { 
    Body,
    Text,
    Thumbnail, 
    View
 } from 'native-base';
 import TimeAgo from './time';

 export default class ListDataItem extends PureComponent {

    constructor(prop) {
        super(props);
        this.data = props.data;
    }

    render() {
        return(
            <TouchableOpacity style={{flexDirection: 'row' }} activeOpacity={0.5}>
                <Thumbnail style={{backgroundColor: '#eee', alignSelf: 'center' }} square Large source={{
                    cache: 'force-cache', url: this.data.urlToImage != null ? this.data.urlToImage : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gNzUK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgB9QLuAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9fooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiigkKCScAc5PQUAFVb3UbHTovMvryC2Q9GmkCg/nXmvjD4oMkslh4fdflysl4RnJ/2P8fy9a8tubqe8nae5nknmY5LyOWYn6mgD6GPjjwyCR/bVrx/tZo/4Tnwz/wBBq2/M186UUAfRf/Cc+Gf+g1bfmaP+E58M/wDQatvzNfOlFAH0X/wnPhn/AKDVt+Zo/wCE58M/9Bq2/M186UUAfRf/AAnPhn/oNW35mj/hOfDP/QatvzNfOlFAH0X/AMJz4Z/6DVt+Zp0fjTw1K4RdbswT3aTaPzOK+cqKAPqiKaKeJZIJEljboyNuB/EU+vmXSNd1PQ7gTadeSQHOWUHKt9V6GvaPBfj228TKLS5RbbUlGSgPyyjuU/w6/XnAB2VFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFec/FXxPJp9jFoto5Sa6UtOwOCI+Rj8Tn8AR3r0UkAEk4A7183+LNYOueJr2+DZiaQrF6bF4X9Bn6mgDFooooAKKKKACiiigAooooAKKKKACiiigAqSCeW1uI54HaOaNgyOpwQwqOigD6P8I6+viTw7BfkATDMc6joJBjP58H6GtyvG/hFrH2fWLrSZGwl0nmRA/31zn81z/3zXslABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFc54h8b6L4cLR3NwZboDi3g+Zx9ew/Hn0Fefah8YNUmZhp9hbWycgGQmRv6D9DQB7JRXgp+J/iosSL2IAnIAgTA/Sk/4Wf4q/wCf6L/vwn+FAHvdFeCf8LP8Vf8AP9F/34T/AAo/4Wf4q/5/ov8Avwn+FAHqnj/WP7G8I3ciPia4H2eLsctnP5LmvnutrXfFWr+I0hj1O5EqwklFWMKATj0rFoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKALmlajLpOr2moQ8vbyrIB0yB1H4jNfTVtcRXdrFcwtuilRZEb1BAIr5ZrptO8f+ItLsIbG1vEEEI2oGiViBz3IoA+haK8E/4Wf4q/5/ov+/Cf4Uf8LP8AFX/P9F/34T/CgD3uivBP+Fn+Kv8An+i/78J/hTovij4oRwWuYJB/daBQP0xQB7zRXlGlfGJtwTV9NUg9ZLVsEf8AAW/+Kr0XR9e0zXrbz9NukmUY3KOGT6qeR/nFAGlRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAV5f4/wDiG9rJLo+iy4mXKz3K9UP91Pf1PboOenRfEPxK3h7w8y28m29uyY4iOqj+Jvw4/EivAiSSSTknqaAFZmdmZmLMxJJJySaSiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKtadqN3pN9HeWNw8FxGcqyn9D6j9DVWigD6A8FeNIPFVmY5VWHUYQDLEDww4+dfb+R/Curr5h0nVLnRtUg1C0fbNCwYDsR3B9iK+ktK1KDV9KttQtjmKeMOB1I9R+ByPqKALlFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAeEfFDU2vvGUsAbMdnGsK4PGcbm/U4/CuLrX8VOz+L9ZLHJF7MPycisigAooooAKKKKACiiigAooooAKKKKACiiigAoorRs/D+s6goNppV5MhxhkhYr+fSgDOorpF8AeKWUEaPMAfV1B/nTZfAnieFcto1wR/sYY/oTQBztFWrvTL+wOLyyubY+k0RT+dVaACiiigAooooAKKKKACiiigAooooAKKKKACvYvg/qbT6Tfaa7Z+zyrIgPZXzkfmv8A49XjteifB6Ur4lvoucNZlvbIdP8AGgD2eiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmnxP/yNus/9f0//AKMasqtXxP8A8jbrP/X9P/6MasqgAooooAKKKKACiiigAooooAKKK2vDXhi/8T3/ANmtE2xrgzTsPljH+PoO/wBMmgDKtrWe8uEt7WGSaZzhUjXcxr0jQPhJcThZ9duTAp5+zwEF/wAW5A/DP1Feh+HPCumeGbTyrKLMzAebcOMvIf6D26fjzW3QBjaV4U0LRVX7DpsCOMfvXXe//fTZP9K2aKKACiiigBHRXUo6hkIwVIyDXMav8PvDurqzGyW1mPSW1+Q/l0P5ZrqKKAPCvEfwz1fRVe4s/wDT7QZJaNcSKPdf8M++K4mvquuJ8YfDyy19ZLuxCWupcncBhJj/ALXv79fXNAHhVFWL2yudOvJbS7haK4iJV0YYI/z+tV6ACiiigAooooAKKKKACiiigAr0D4Qf8jbdf9eL/wDoyOvP69A+EH/I23X/AF4v/wCjI6APa6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+afE/8AyNus/wDX9P8A+jGrKrV8T/8AI26z/wBf0/8A6MasqgAooooAKKKKACiiigAoopQCzAAEknGBySaANTw7oF14k1eOwtRjPzSyEZEadyf88nivofRtGstC02KxsYwkaDJP8Tt3Y+5/+t0rF8CeGF8N6CglQC+uAJLhj1B7L+H8811NABRRXNeLfGdh4VtwJP399IMx26nBx6sew/U9u+ADopZYoImlmkSONRlndsKPxrktS+JnhrTmZEuZLx14xbJuGf8AeOB+RNeOa74n1XxHcGTULljGDlIE+WNPov8AXk+9Y9AHrsnxksw2ItHnZfVpgp/kaltvjHprMBc6XdxD1jdX/nivHaKAPorSPHHh7WWWO21BEmbgRTjy2P0zwfwzXQ18qV2Hhj4h6r4fdIZ3a9sBgGKRssg/2G7fTp9OtAHvdFUNI1ix1zTo76wmEkLcejK3oR2P+elX6AOT8b+DIPE9gZYVVNThU+TJ0Dj+43t6eh9s58Dmhlt5pIZkZJY2KujDBUjqK+qK8p+K/hdVC+IbVMEkR3agdeyv/IH/AID70AeVUUUUAFFFFABRRRQAUUUUAFegfCD/AJG26/68X/8ARkdef16B8IP+Rtuv+vF//RkdAHtdFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfNPif/kbdZ/6/p/8A0Y1ZVavif/kbdZ/6/p//AEY1ZVABRRRQAUUUUAFFFFABXY/DTRBq/iqKaVM29kvnsD0Lfwj8+f8AgNcdXt3wm00WvhaS+I+e8mY59UX5R+u6gDvaKKKAMLxZ4kh8MaJJeOFedjst4ifvv/gOp/xIr55vr651G+mvLyVpbiVizuepP+fyFdR8SNdbWPFU0KPm2sSYIwDwWH3j+fH0Arj6ACiiigAooooAKKKKAN/wl4oufC+rLcRlntZCFuIAeHX1+o7fl0Jr6GtLqG+tIrq2cSQyoHRx0INfLVeu/CLXWmtbrRJnyYP30Gf7pPzD8Dg/8CNAHp1QXtnDqFjPZ3C7oZ42jcexyKnooA+X9U0+XStUurCb/WW8jRk9Acd/xqpXoHxb00WviaC+RcLdwgsfV14P6ba8/oAKKKKACiiigAooooAK9A+EH/I23X/Xi/8A6Mjrz+vQPhB/yNt1/wBeL/8AoyOgD2uiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmnxP/AMjbrP8A1/T/APoxqyq1fE//ACNus/8AX9P/AOjGrKoAKKKKACiiigAooooAK+kfCFsLTwhpMIGD9lRiPQsAx/nXzdX09owVdD08RnKC2jAPXI2igC7VXU7sWGlXl4eRbwPLj/dUmrVYnjD/AJE3WP8Ar0k/kaAPnF3Z3Z3Yl2JLE8k02iigAooooAKKKKACiiigArpfAF81h4201w2FlkMLDsdwK/zxXNVo+Hiy+JdKZM7xeREY5Od4oA+mqKKKAPN/jHbB9D066wMx3JjB74ZSf/ZK8cr3D4tf8icn/X2n8mrw+gAooooAKKKKACiiigAr0D4Qf8jbdf8AXi//AKMjrz+vQPhB/wAjbdf9eL/+jI6APa6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+afE//ACNus/8AX9P/AOjGrKrV8T/8jbrP/X9P/wCjGrKoAKKKKACiiigAooooAK+lPCtwLrwnpEwOc2kYJ9woB/UGvmuvc/hVqIvPB62xbL2kzx4PXafmH/oR/KgDuKpazaHUNEv7MDJnt5I1HuVIFXaKAPlQggkEYI6iium8e6I2h+K7qNUxb3DGeEjphs5H4HI+mK5mgAooooAKKKKACiiigAroPA1m17410qMLkJOJifTZ839K5+vU/hBojb7vW5UwoHkQE9+hY/yH50AesUUUUAedfGG4C+HbG2zhpLsPjPUKrf8AxQrxmvRfi/qIn16ysFORawlm9mcj+ij8686oAKKKKACiiigAooooAK9A+EH/ACNt1/14v/6Mjrz+vQPhB/yNt1/14v8A+jI6APa6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+afE//I26z/1/T/8Aoxqyq1fE/wDyNus/9f0//oxqyqACiiigAooooAKKKKACu7+FetjTfEpsZXxDfqEGegkHK/1H1IrhKfFK8EySxOUkjYMjDgqR0oA+qKKwvCPiKLxLoMN4CouFAjuEH8Mg6/geo/8ArVu0Acv468LDxPou2EAX1vl4GPG71X8ePxAr5+likgmeGVGSSNirKwwQRX1TXE+NvAEHiMNfWJSDUwMEnhJv9739/wAD2wAeFUVb1HTL3SbtrW/tpIJl/hcYz7j1H6VUoAKKKKACiit3w54S1XxLcBLOErbg4kuJBhFH9T7CgCtoGhXfiLVorC0Q5Y5kkIysa92P+eTxX0Xpem22kaZb6faJthgQKo7k9yfcnJ+tUvDXhqx8MaaLW0Xc7YM07D5pG9/b0Hb65NbNABUc88dtbyzzOEijUu7HoAMk1JXm/wAVfE4tLBdCtn/f3ADXBB+7H6fj/Ie9AHluu6o+t67e6i4IM8hZQeoXoo/AYrOoooAKKKKACiiigAooooAK9A+EH/I23X/Xi/8A6Mjrz+vQPhB/yNt1/wBeL/8AoyOgD2uiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPmnxP/AMjbrP8A1/T/APoxqyq1fE//ACNus/8AX9P/AOjGrKoAKKKKACiiigAooooAKKKKAOg8IeKJ/C2sLcjc9rLhbiIf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+8e/oOB3z3dFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q=='
                }}  />

                <Body>
                    <Text style={{ fontFamily: 'RobotoSlab', fontSize: 16 }} numberOfLines={ 2 } > 
                        {this.data.title}
                    </Text>
                    <Text note numberOfLines={ 3 } >
                        {this.data.description}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 8}} >
                        <Text note>
                            {this.data.source}
                        </Text>
                        <TimeAgo date=          {this.data.publishedAt} />
                    </View>
                </Body>
            </TouchableOpacity>

        )
        
    }

 }