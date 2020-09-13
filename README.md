[![Netlify Status](https://api.netlify.com/api/v1/badges/997302d3-b8aa-4e14-ad02-31cce307c79d/deploy-status)](https://app.netlify.com/sites/angry-swartz-cf2a0b/deploys)

A website for a cello teacher

## Architecture

- Next.js ✔️
- Redux ✔️
- TypeScript ✔️
- Mapbox ✔️
- Netlify Forms ✔️
- ESLint ✔️
- Prettier ✔️

### Netlify Forms Integration

- Forms docs: https://docs.netlify.com/forms/setup/#html-forms
- Functions docs: https://docs.netlify.com/functions/overview/

Using Netlify Forms in conjunction with a Netlify lambda function to delete form submissions as they come in (after forwarding) in order to comply with GDPR and not keep personal data stored for no reason.
