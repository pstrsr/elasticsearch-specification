/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { SynonymsSetUpdate } from '../_types/SynonymsSet'

/**
 * Creates or updates a synonym set.
 * @rest_spec_name synonyms.put
 * @availability stack since=8.10.0 stability=experimental
 * @availability serverless stability=experimental visibility=public
 */
interface Request extends RequestBase {
  path_parts: {
    /**
     * The name of the synonyms set to be created or updated
     */
    synonyms_set: Name
  }
  /**
   * The synonym set information to update
   */
  /** @codegen_name synonym_set */
  body: SynonymsSetUpdate
}
