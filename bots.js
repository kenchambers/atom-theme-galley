June 8
=========================

Regular BYBIT (MACD): ETHEREUM
TRADE ALERT: BYBIT 69 & BYBIT 420:


START LONG:
[
	{
		"message_type": "bot",
		"bot_id": 4417462,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 0,
		"action": "close_at_market_price_all_and_stop_bot"
	},
	{
		"message_type": "bot",
		"bot_id": 4558665,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 0,
		"action": "close_at_market_price_all_and_stop_bot"
	},
	{
		"message_type": "bot",
		"bot_id": 4417431,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 10,
		"action": "start_bot_and_start_deal"
	},
	{
		"message_type": "bot",
		"bot_id": 4558681,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 10,
		"action": "start_bot_and_start_deal"
	}
]


START SHORT:
[
	{
		"message_type": "bot",
		"bot_id": 4417431,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 0,
		"action": "close_at_market_price_all_and_stop_bot"
	},
  {
		"message_type": "bot",
		"bot_id": 4558681,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 0,
		"action": "close_at_market_price_all_and_stop_bot"
	},
	{
		"message_type": "bot",
		"bot_id": 4417462,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 10,
		"action": "start_bot_and_start_deal"
	},
	{
		"message_type": "bot",
		"bot_id": 4558665,
		"email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",
		"delay_seconds": 10,
		"action": "start_bot_and_start_deal"
	}
]



for multiple bots we are starting bot and then immediatly turning it off, after deal is executed.
BYBIT 420 BTC LONG / SHORT (RSI MACD ):
going to run tests using bybit 420 , for RSI & macd
> strategy only running a long / short bot
> each bot will have a TP of 1%

START LONG:
[{  "message_type": "bot",  "bot_id": 4723611,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"}]


STart short
[{  "message_type": "bot",  "bot_id": 4723610,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"}]

BYBIT 69 & BYBIT

Start applying new macd rsi to BTC
> strategy: running Macd/ RSI to start and stop on 2 bybit servers
trading view will send requests to both exchanges with 1 alert

START LONG BOT:
[
  { "message_type": "bot", "bot_id": 4706932, "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596", "delay_seconds": 10, "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4417431,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"}
]
STOP LONG BOT:
[
  { "message_type": "bot", "bot_id": 4706932, "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596", "delay_seconds": 0, "action": "close_at_market_price_all_and_stop_bot"},
  {  "message_type": "bot",  "bot_id": 4417431,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 0,  "action": "close_at_market_price_all_and_stop_bot"}
]
START SHORT BOT:
[
  { "message_type": "bot", "bot_id": 4706928, "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596", "delay_seconds": 10, "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4417462,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 0,  "action": "start_bot_and_start_deal"}
]
STOP SHORT BOT:
[
  { "message_type": "bot", "bot_id": 4706928, "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596", "delay_seconds": 0, "action": "close_at_market_price_all_and_stop_bot"},
  {  "message_type": "bot",  "bot_id": 4417462,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 0,  "action": "close_at_market_price_all_and_stop_bot"}
]
BINANCE: (ETH)
TESTING MACD and RSI with 1% TP , and multiple deals
 > strategy: each bot has a TP set to 1%, and will trigger and start multiple longs (since we can have concurrent deals at the same time)
 > also each will TP in either BTC or ETH , 2 eth tp to every 1 BTC tp , since we need funds to keep it going.
ETH LONG:
[
  {  "message_type": "account",  "account_id": 30363013,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 0,  "action": "stop_all_short"},
  {  "message_type": "bot",  "bot_id": 4721975,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721779,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4722051,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721819,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721960,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4722063,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"}
]
ETH SHORT:
[
  {  "message_type": "account",  "account_id": 30363013,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 0,  "action": "stop_all_long"},
  {  "message_type": "bot",  "bot_id": 4721989,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721833,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721993,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4722010,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4721841,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"},
  {  "message_type": "bot",  "bot_id": 4722020,  "email_token": "368e7eef-5591-43ec-9fd4-c2703c820596",  "delay_seconds": 10,  "action": "start_bot_and_start_deal"}
]