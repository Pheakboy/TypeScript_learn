type Props = {
    name: string | number;
    messageCount?: number;
    isLoggedIn: boolean;
  };
  type HappyBirthday = {
    age: number;
    message: string;
    gift: string;
  };
  
 export  type Total = Props & HappyBirthday;