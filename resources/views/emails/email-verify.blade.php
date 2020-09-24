<!doctype html>
<html>
<head>
  <title> Email Design</title>
  <style>
  </style>
</head>
<body style="margin: 0; padding: 0;">
<table border="0" cellpadding="0" cellspacing="0" width="640" style="max-width: 640px; margin: 0 auto; width: 100%;">	
		<tr>
			<td style="padding: 10px 0 30px 0;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
					<tr>
						<td align="center" style="padding: 40px 0 5px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
            Welcome
						</td>
					</tr>
					<tr>
						<td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td style="color: #153643; font-family: Arial, sans-serif; font-size: 18px;">
										Hey <b>{{ $name }}</b>
									</td>
								</tr>
								<tr>
									<td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  We're excited to have you get started. Just press the button below to confirm your email.
									</td>
								</tr>
								<tr>
									<td>
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
											<tr>
												<td width="260" valign="top">
													<table border="0" cellpadding="0" cellspacing="0" width="100%">
														<tr>
															<td align="center">
																 <a href="{{ $url }}" target="_blank" style="text-decoration: none; background-color: #169bc8; color: #fff; padding: 8px 22px; font-size: 16px; margin-top: 20px;" >Confirm Email</a>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</td>
								</tr>
                <tr>
									<td style="padding: 30px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  If that doesn't work, copy and paste the following link in your browser:
									</td>
								</tr>
                <tr>
									<td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px; width: 600px; display: block; overflow: hidden;">
                    <a href="{{ $url }}">{{ $url }}</a>
									</td>
								</tr>
                <tr>
									<td style="padding: 30px 0 5px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  If you have any questions, just reply to this email. We're always happy to help out.
									</td>
								</tr>
                <tr>
									<td style="padding: 20px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                  Cheers,<br>
                  <b>Team VirtualDepositions</b>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>