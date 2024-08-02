 @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
        *{
            margin: 0;
            padding: 0;
            outline: none;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body{
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #dde1e7;
            /* background: #131419; */
            flex-direction: column;
        }
        .container{
            width: 60%;
        }
        .wrapper{
            min-width: 750px;
            max-width: 1000px;
            padding: 25px;
            border-radius: 10px;
            background: #dde1e7;
            box-shadow: -3px -3px 7px #ffffff73,
                        2px 2px 5px rgba(94,104,121,0.288);
            /* background: #131419; */
            box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
                        -3px -3px 7px rgba(255,255,255,0.05);
        }
        .wrapper .keys{
            display: flex;
            justify-content: center;
        }
        .wrapper .keys input{
            height: 50px;
            min-width: 50px;
            padding: 10px;
            border: none;
            outline: none;
            background: #dde1e7;
            box-shadow: -3px -3px 7px #ffffff73,
                        2px 2px 5px rgba(94,104,121,0.288);
            background: #131419;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
                        -3px -3px 7px rgba(255,255,255,0.05);
            margin: 10px;
            color: grey;
            color: #c7c7c7;
            font-size: 20px;
            border-radius: 5px;
            cursor: pointer;
        }
        .wrapper .keys input:focus{
            font-size: 19px;
            color: #3498db;
            box-shadow: inset -3px -3px 7px #ffffff73,
                        inset 2px 2px 5px rgba(94,104,121,0.288);
            box-shadow: inset 2px 2px 5px rgba(0,0,0,0.5),
                        inset -3px -3px 7px rgba(255,255,255,0.05);
        }
        .wrapper .keys input[value="SPACE"]{
            width: 60%;
        }
        #display{
            margin-top: 20px;
            width: 100%;
            height: 100px;
            padding: 10px;
            font-size: 18px;
            border-radius: 5px;
            border: 1px solid #ccc;
            background: #fff;
        }
