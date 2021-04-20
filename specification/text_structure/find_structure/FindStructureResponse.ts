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

import { Field, integer, long, uint } from '@common/common'
import { TypeMapping } from '@common/mapping/TypeMapping'
import { PipelineConfig } from '@common/ingest/PipelineConfig'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class FindStructureResponse {
  charset: string
  has_header_row?: boolean
  has_byte_order_marker: boolean
  format: string
  field_stats: Dictionary<Field, FieldStat>
  sample_start: string
  num_messages_analyzed: integer
  mappings: TypeMapping
  quote?: string
  delimiter?: string
  need_client_timezone: boolean
  num_lines_analyzed: integer
  column_names?: string[]
  explanation?: string[]
  grok_pattern?: string
  multiline_start_pattern?: string
  exclude_lines_pattern?: string
  java_timestamp_formats?: string[]
  joda_timestamp_formats?: string[]
  timestamp_field?: Field
  should_trim_fields?: boolean
  ingest_pipeline: PipelineConfig
}

export class FieldStat {
  count: integer
  cardinality: integer
  top_hits: TopHit[]
  mean_value?: integer
  median_value?: integer
  max_value?: integer
  min_value?: integer
  earliest?: string
  latest?: string
}

export class TopHit {
  count: long
  value: UserDefinedValue
}