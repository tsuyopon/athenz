/*
 * Copyright The Athenz Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { render } from '@testing-library/react';
import GroupTagsPage from '../../../../../../pages/domain/[domain]/group/[group]/tags';

describe('Groups Tag Page', () => {
    it('should render', () => {
        const query = {
            domain: 'dom',
        };
        let domains = [];
        domains.push({ name: 'athens' });
        domains.push({ name: 'athens.ci' });
        const userId = 'test';
        const domain = 'home.test';
        const domainDetails = {
            description: 'test',
            org: 'athenz',
            enabled: true,
            auditEnabled: false,
            account: '1231243134',
            ypmId: 0,
            name: 'home.test',
            modified: '2020-01-24T18:14:51.939Z',
            id: 'a48cb050-e4fa-11e7-9d38-9d13efb959d1',
        };
        let headerDetails = {
            headerLinks: [
                {
                    title: 'Website',
                    url: 'http://www.athenz.io',
                    target: '_blank',
                },
            ],
        };
        let groupDetails = {
            modified: '2020-02-12T21:44:37.792Z',
            tags: {
                'tag-name': {
                    list: ['first', 'second'],
                },
            },
        };
        const { getByTestId } = render(
            <GroupTagsPage
                domains={domains}
                req='req'
                userId={userId}
                query={query}
                reload={false}
                domainDetails={domainDetails}
                groupDetails={groupDetails}
                domain={domain}
                domainResult={[]}
                headerDetails={headerDetails}
            />
        );
        const groupTagsPage = getByTestId('group-tags');
        expect(groupTagsPage).toMatchSnapshot();
    });
});
