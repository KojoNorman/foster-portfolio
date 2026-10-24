/**
 * Netlify Automated Event-Triggered Function: submission-created
 * Runs automatically on the server whenever a verified Netlify Form is submitted.
 */
export async function handler(event) {
  try {
    const payload = JSON.parse(event.body).payload;
    const data = payload.data || {};

    const submissionSummary = {
      formName: payload.form_name || 'foster-portfolio-contact',
      submittedAt: payload.created_at || new Date().toISOString(),
      name: data.name || 'Anonymous',
      email: data.email || 'Not provided',
      organisation: data.organisation || 'Not specified',
      reason: data.reason || 'General Enquiry',
      message: data.message || '',
    };

    // 1. Structured server log (viewable in Netlify Dashboard -> Logs -> Functions)
    console.log('[Portfolio Enquiry Received]:', JSON.stringify(submissionSummary, null, 2));

    // 2. Optional instant Webhook integration (Slack / Discord / Custom Webhook)
    const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      const textMessage = [
        `New Portfolio Enquiry (${submissionSummary.reason})`,
        `From: ${submissionSummary.name} (${submissionSummary.organisation})`,
        `Email: ${submissionSummary.email}`,
        `Message: ${submissionSummary.message}`,
      ].join('\n');

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: textMessage,
          content: textMessage, // Supports both Slack ('text') and Discord ('content') webhooks
        }),
      });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'Notification processed' }),
    };
  } catch (error) {
    console.error('[Form Notification Handler Error]:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process submission event' }),
    };
  }
}