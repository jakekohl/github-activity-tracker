import { getUserContributions } from '../lib/github.js';

const apiBase = process.env.API_BASE;

async function pullGitHubActivityHandler() {
    const username = 'jakekohl';
    const startDate = new Date('2001-01-01T00:00:00Z').toISOString();
    const endDate = new Date().toISOString();
    console.debug(`Pulling GitHub activity for user ${username} from ${startDate} to ${endDate}`);
    const contributions = await getUserContributions(username, startDate, endDate);
    if (contributions?.error && contributions.error) { return contributions?.error; };
    return contributions;
};

const pullRoutes = [
    {
        method: 'GET',
        path: `${apiBase}/pull`,
        handler: async (request, h) => {
            return await pullGitHubActivityHandler();
        },
    },
];

export { pullRoutes };