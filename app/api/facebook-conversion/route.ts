import { NextRequest, NextResponse } from 'next/server'
const bizSdk = require('facebook-nodejs-business-sdk');

const access_token = process.env.FACEBOOK_ACCESS_TOKEN;
const pixel_id = '737796992460675';

export async function POST(request: NextRequest) {
  try {
    const { eventName, eventData, userData } = await request.json();
    
    const Api = bizSdk.Api.init(access_token);
    const ServerEvent = bizSdk.ServerEvent;
    const EventRequest = bizSdk.EventRequest;
    const UserData = bizSdk.UserData;
    const CustomData = bizSdk.CustomData;

    const userData_obj = (new UserData())
      .setEmails([userData.email])
      .setPhones([userData.phone])
    //   .setClientIpAddress(request?.ip)
      .setClientUserAgent(request.headers.get('user-agent'));

    const customData = (new CustomData())
      .setValue(eventData.value)
      .setCurrency(eventData.currency);

    const serverEvent = (new ServerEvent())
      .setEventName(eventName)
      .setEventTime(Math.floor(Date.now() / 1000))
      .setUserData(userData_obj)
      .setCustomData(customData)
      .setEventSourceUrl(eventData.source_url)
      .setActionSource('website');

    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest(access_token, pixel_id))
      .setEvents(eventsData);

    const response = await eventRequest.execute();
    
    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error('Conversions API error:', error);
    return NextResponse.json({ error: 'Failed to send event' }, { status: 500 });
  }
}