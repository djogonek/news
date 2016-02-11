<?php
class DB
  {
    private static $host='127.0.0.1';//host ip
    private static $user='root';//login
    private static $pass='';//password
    private static $dbName='news';//database name
    
    public static function dbConnect()
      {
        $dbCon=@mysql_connect(self::$host,self::$user,self::$pass) or die('ALERT CONNECT');//connecting to host
		mysql_query("set names 'utf-8'");
        $db=mysql_select_db(self::$dbName)or die('ALERT ZAPROS');//selecting database
        return $db;
      }
    public static function query($inp)
      {
        $resp=mysql_query($inp);//sql-request executing 
		return $resp;

      }
  
    public static function getFeedback($resp)
      {
        return mysql_fetch_assoc($resp);//getting feedback from database
      }
  }