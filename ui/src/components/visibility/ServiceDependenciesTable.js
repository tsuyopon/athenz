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
import ServiceDependency from './ServiceDependency';

export default class ServiceDependenciesTable extends React.Component {
    render() {
        const rows =
            this.props.serviceDependencies &&
            this.props.serviceDependencies
                .sort((a, b) => {
                    return a.service.localeCompare(b.service);
                })
                .map((item, i) => {
                    return (
                        <ServiceDependency
                            key={item.service}
                            dependency={item}
                        />
                    );
                });

        return rows;
    }
}
