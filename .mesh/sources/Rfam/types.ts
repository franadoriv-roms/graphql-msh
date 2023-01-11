// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace RfamTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: bigint;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: Date | string | number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date | string;
};

export type Query = {
  _annotated_file?: Maybe<Array<Maybe<_annotated_file>>>;
  count__annotated_file?: Maybe<Scalars['Int']>;
  _family_file?: Maybe<Array<Maybe<_family_file>>>;
  count__family_file?: Maybe<Scalars['Int']>;
  _genome_data?: Maybe<Array<Maybe<_genome_data>>>;
  count__genome_data?: Maybe<Scalars['Int']>;
  _lock?: Maybe<Array<Maybe<_lock>>>;
  count__lock?: Maybe<Scalars['Int']>;
  _overlap?: Maybe<Array<Maybe<_overlap>>>;
  count__overlap?: Maybe<Scalars['Int']>;
  _overlap_membership?: Maybe<Array<Maybe<_overlap_membership>>>;
  count__overlap_membership?: Maybe<Scalars['Int']>;
  _post_process?: Maybe<Array<Maybe<_post_process>>>;
  count__post_process?: Maybe<Scalars['Int']>;
  alignment_and_tree?: Maybe<Array<Maybe<alignment_and_tree>>>;
  count_alignment_and_tree?: Maybe<Scalars['Int']>;
  author?: Maybe<Array<Maybe<author>>>;
  count_author?: Maybe<Scalars['Int']>;
  clan?: Maybe<Array<Maybe<clan>>>;
  count_clan?: Maybe<Scalars['Int']>;
  clan_database_link?: Maybe<Array<Maybe<clan_database_link>>>;
  count_clan_database_link?: Maybe<Scalars['Int']>;
  clan_literature_reference?: Maybe<Array<Maybe<clan_literature_reference>>>;
  count_clan_literature_reference?: Maybe<Scalars['Int']>;
  clan_membership?: Maybe<Array<Maybe<clan_membership>>>;
  count_clan_membership?: Maybe<Scalars['Int']>;
  database_link?: Maybe<Array<Maybe<database_link>>>;
  count_database_link?: Maybe<Scalars['Int']>;
  db_version?: Maybe<Array<Maybe<db_version>>>;
  count_db_version?: Maybe<Scalars['Int']>;
  dead_clan?: Maybe<Array<Maybe<dead_clan>>>;
  count_dead_clan?: Maybe<Scalars['Int']>;
  dead_family?: Maybe<Array<Maybe<dead_family>>>;
  count_dead_family?: Maybe<Scalars['Int']>;
  ensembl_names?: Maybe<Array<Maybe<ensembl_names>>>;
  count_ensembl_names?: Maybe<Scalars['Int']>;
  family?: Maybe<Array<Maybe<family>>>;
  count_family?: Maybe<Scalars['Int']>;
  family_author?: Maybe<Array<Maybe<family_author>>>;
  count_family_author?: Maybe<Scalars['Int']>;
  family_literature_reference?: Maybe<Array<Maybe<family_literature_reference>>>;
  count_family_literature_reference?: Maybe<Scalars['Int']>;
  family_long?: Maybe<Array<Maybe<family_long>>>;
  count_family_long?: Maybe<Scalars['Int']>;
  family_ncbi?: Maybe<Array<Maybe<family_ncbi>>>;
  count_family_ncbi?: Maybe<Scalars['Int']>;
  features?: Maybe<Array<Maybe<features>>>;
  count_features?: Maybe<Scalars['Int']>;
  full_region?: Maybe<Array<Maybe<full_region>>>;
  count_full_region?: Maybe<Scalars['Int']>;
  genome?: Maybe<Array<Maybe<genome>>>;
  count_genome?: Maybe<Scalars['Int']>;
  genome_temp?: Maybe<Array<Maybe<genome_temp>>>;
  count_genome_temp?: Maybe<Scalars['Int']>;
  genseq?: Maybe<Array<Maybe<genseq>>>;
  count_genseq?: Maybe<Scalars['Int']>;
  genseq_temp?: Maybe<Array<Maybe<genseq_temp>>>;
  count_genseq_temp?: Maybe<Scalars['Int']>;
  html_alignment?: Maybe<Array<Maybe<html_alignment>>>;
  count_html_alignment?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<keywords>>>;
  count_keywords?: Maybe<Scalars['Int']>;
  literature_reference?: Maybe<Array<Maybe<literature_reference>>>;
  count_literature_reference?: Maybe<Scalars['Int']>;
  matches_and_fasta?: Maybe<Array<Maybe<matches_and_fasta>>>;
  count_matches_and_fasta?: Maybe<Scalars['Int']>;
  motif?: Maybe<Array<Maybe<motif>>>;
  count_motif?: Maybe<Scalars['Int']>;
  motif_database_link?: Maybe<Array<Maybe<motif_database_link>>>;
  count_motif_database_link?: Maybe<Scalars['Int']>;
  motif_family_stats?: Maybe<Array<Maybe<motif_family_stats>>>;
  count_motif_family_stats?: Maybe<Scalars['Int']>;
  motif_file?: Maybe<Array<Maybe<motif_file>>>;
  count_motif_file?: Maybe<Scalars['Int']>;
  motif_literature?: Maybe<Array<Maybe<motif_literature>>>;
  count_motif_literature?: Maybe<Scalars['Int']>;
  motif_matches?: Maybe<Array<Maybe<motif_matches>>>;
  count_motif_matches?: Maybe<Scalars['Int']>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
  count_motif_old?: Maybe<Scalars['Int']>;
  motif_pdb?: Maybe<Array<Maybe<motif_pdb>>>;
  count_motif_pdb?: Maybe<Scalars['Int']>;
  motif_ss_image?: Maybe<Array<Maybe<motif_ss_image>>>;
  count_motif_ss_image?: Maybe<Scalars['Int']>;
  pdb?: Maybe<Array<Maybe<pdb>>>;
  count_pdb?: Maybe<Scalars['Int']>;
  pdb_full_region?: Maybe<Array<Maybe<pdb_full_region>>>;
  count_pdb_full_region?: Maybe<Scalars['Int']>;
  pdb_full_region_old?: Maybe<Array<Maybe<pdb_full_region_old>>>;
  count_pdb_full_region_old?: Maybe<Scalars['Int']>;
  pdb_rfam_reg?: Maybe<Array<Maybe<pdb_rfam_reg>>>;
  count_pdb_rfam_reg?: Maybe<Scalars['Int']>;
  pdb_sequence?: Maybe<Array<Maybe<pdb_sequence>>>;
  count_pdb_sequence?: Maybe<Scalars['Int']>;
  processed_data?: Maybe<Array<Maybe<processed_data>>>;
  count_processed_data?: Maybe<Scalars['Int']>;
  pseudoknot?: Maybe<Array<Maybe<pseudoknot>>>;
  count_pseudoknot?: Maybe<Scalars['Int']>;
  refseq?: Maybe<Array<Maybe<refseq>>>;
  count_refseq?: Maybe<Scalars['Int']>;
  refseq_full_region?: Maybe<Array<Maybe<refseq_full_region>>>;
  count_refseq_full_region?: Maybe<Scalars['Int']>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
  count_rfamseq?: Maybe<Scalars['Int']>;
  rfamseq_temp?: Maybe<Array<Maybe<rfamseq_temp>>>;
  count_rfamseq_temp?: Maybe<Scalars['Int']>;
  rnacentral_matches?: Maybe<Array<Maybe<rnacentral_matches>>>;
  count_rnacentral_matches?: Maybe<Scalars['Int']>;
  rscape_annotations?: Maybe<Array<Maybe<rscape_annotations>>>;
  count_rscape_annotations?: Maybe<Scalars['Int']>;
  secondary_structure_image?: Maybe<Array<Maybe<secondary_structure_image>>>;
  count_secondary_structure_image?: Maybe<Scalars['Int']>;
  seed_region?: Maybe<Array<Maybe<seed_region>>>;
  count_seed_region?: Maybe<Scalars['Int']>;
  sunburst?: Maybe<Array<Maybe<sunburst>>>;
  count_sunburst?: Maybe<Scalars['Int']>;
  taxonomic_tree?: Maybe<Array<Maybe<taxonomic_tree>>>;
  count_taxonomic_tree?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<Array<Maybe<taxonomy>>>;
  count_taxonomy?: Maybe<Scalars['Int']>;
  taxonomy_websearch?: Maybe<Array<Maybe<taxonomy_websearch>>>;
  count_taxonomy_websearch?: Maybe<Scalars['Int']>;
  version?: Maybe<Array<Maybe<version>>>;
  count_version?: Maybe<Scalars['Int']>;
  wikitext?: Maybe<Array<Maybe<wikitext>>>;
  count_wikitext?: Maybe<Scalars['Int']>;
};


export type Query_annotated_fileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_annotated_file_WhereInput>;
  orderBy?: InputMaybe<_annotated_file_OrderByInput>;
};


export type Querycount__annotated_fileArgs = {
  where?: InputMaybe<_annotated_file_WhereInput>;
};


export type Query_family_fileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_family_file_WhereInput>;
  orderBy?: InputMaybe<_family_file_OrderByInput>;
};


export type Querycount__family_fileArgs = {
  where?: InputMaybe<_family_file_WhereInput>;
};


export type Query_genome_dataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_genome_data_WhereInput>;
  orderBy?: InputMaybe<_genome_data_OrderByInput>;
};


export type Querycount__genome_dataArgs = {
  where?: InputMaybe<_genome_data_WhereInput>;
};


export type Query_lockArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_lock_WhereInput>;
  orderBy?: InputMaybe<_lock_OrderByInput>;
};


export type Querycount__lockArgs = {
  where?: InputMaybe<_lock_WhereInput>;
};


export type Query_overlapArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_overlap_WhereInput>;
  orderBy?: InputMaybe<_overlap_OrderByInput>;
};


export type Querycount__overlapArgs = {
  where?: InputMaybe<_overlap_WhereInput>;
};


export type Query_overlap_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_overlap_membership_WhereInput>;
  orderBy?: InputMaybe<_overlap_membership_OrderByInput>;
};


export type Querycount__overlap_membershipArgs = {
  where?: InputMaybe<_overlap_membership_WhereInput>;
};


export type Query_post_processArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_post_process_WhereInput>;
  orderBy?: InputMaybe<_post_process_OrderByInput>;
};


export type Querycount__post_processArgs = {
  where?: InputMaybe<_post_process_WhereInput>;
};


export type Queryalignment_and_treeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<alignment_and_tree_WhereInput>;
  orderBy?: InputMaybe<alignment_and_tree_OrderByInput>;
};


export type Querycount_alignment_and_treeArgs = {
  where?: InputMaybe<alignment_and_tree_WhereInput>;
};


export type QueryauthorArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<author_WhereInput>;
  orderBy?: InputMaybe<author_OrderByInput>;
};


export type Querycount_authorArgs = {
  where?: InputMaybe<author_WhereInput>;
};


export type QueryclanArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_WhereInput>;
  orderBy?: InputMaybe<clan_OrderByInput>;
};


export type Querycount_clanArgs = {
  where?: InputMaybe<clan_WhereInput>;
};


export type Queryclan_database_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_database_link_WhereInput>;
  orderBy?: InputMaybe<clan_database_link_OrderByInput>;
};


export type Querycount_clan_database_linkArgs = {
  where?: InputMaybe<clan_database_link_WhereInput>;
};


export type Queryclan_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_literature_reference_WhereInput>;
  orderBy?: InputMaybe<clan_literature_reference_OrderByInput>;
};


export type Querycount_clan_literature_referenceArgs = {
  where?: InputMaybe<clan_literature_reference_WhereInput>;
};


export type Queryclan_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_membership_WhereInput>;
  orderBy?: InputMaybe<clan_membership_OrderByInput>;
};


export type Querycount_clan_membershipArgs = {
  where?: InputMaybe<clan_membership_WhereInput>;
};


export type Querydatabase_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<database_link_WhereInput>;
  orderBy?: InputMaybe<database_link_OrderByInput>;
};


export type Querycount_database_linkArgs = {
  where?: InputMaybe<database_link_WhereInput>;
};


export type Querydb_versionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<db_version_WhereInput>;
  orderBy?: InputMaybe<db_version_OrderByInput>;
};


export type Querycount_db_versionArgs = {
  where?: InputMaybe<db_version_WhereInput>;
};


export type Querydead_clanArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<dead_clan_WhereInput>;
  orderBy?: InputMaybe<dead_clan_OrderByInput>;
};


export type Querycount_dead_clanArgs = {
  where?: InputMaybe<dead_clan_WhereInput>;
};


export type Querydead_familyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<dead_family_WhereInput>;
  orderBy?: InputMaybe<dead_family_OrderByInput>;
};


export type Querycount_dead_familyArgs = {
  where?: InputMaybe<dead_family_WhereInput>;
};


export type Queryensembl_namesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ensembl_names_WhereInput>;
  orderBy?: InputMaybe<ensembl_names_OrderByInput>;
};


export type Querycount_ensembl_namesArgs = {
  where?: InputMaybe<ensembl_names_WhereInput>;
};


export type QueryfamilyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
};


export type Querycount_familyArgs = {
  where?: InputMaybe<family_WhereInput>;
};


export type Queryfamily_authorArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_author_WhereInput>;
  orderBy?: InputMaybe<family_author_OrderByInput>;
};


export type Querycount_family_authorArgs = {
  where?: InputMaybe<family_author_WhereInput>;
};


export type Queryfamily_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_literature_reference_WhereInput>;
  orderBy?: InputMaybe<family_literature_reference_OrderByInput>;
};


export type Querycount_family_literature_referenceArgs = {
  where?: InputMaybe<family_literature_reference_WhereInput>;
};


export type Queryfamily_longArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_long_WhereInput>;
  orderBy?: InputMaybe<family_long_OrderByInput>;
};


export type Querycount_family_longArgs = {
  where?: InputMaybe<family_long_WhereInput>;
};


export type Queryfamily_ncbiArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_ncbi_WhereInput>;
  orderBy?: InputMaybe<family_ncbi_OrderByInput>;
};


export type Querycount_family_ncbiArgs = {
  where?: InputMaybe<family_ncbi_WhereInput>;
};


export type QueryfeaturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<features_WhereInput>;
  orderBy?: InputMaybe<features_OrderByInput>;
};


export type Querycount_featuresArgs = {
  where?: InputMaybe<features_WhereInput>;
};


export type Queryfull_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<full_region_WhereInput>;
  orderBy?: InputMaybe<full_region_OrderByInput>;
};


export type Querycount_full_regionArgs = {
  where?: InputMaybe<full_region_WhereInput>;
};


export type QuerygenomeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<genome_WhereInput>;
  orderBy?: InputMaybe<genome_OrderByInput>;
};


export type Querycount_genomeArgs = {
  where?: InputMaybe<genome_WhereInput>;
};


export type Querygenome_tempArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<genome_temp_WhereInput>;
  orderBy?: InputMaybe<genome_temp_OrderByInput>;
};


export type Querycount_genome_tempArgs = {
  where?: InputMaybe<genome_temp_WhereInput>;
};


export type QuerygenseqArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<genseq_WhereInput>;
  orderBy?: InputMaybe<genseq_OrderByInput>;
};


export type Querycount_genseqArgs = {
  where?: InputMaybe<genseq_WhereInput>;
};


export type Querygenseq_tempArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<genseq_temp_WhereInput>;
  orderBy?: InputMaybe<genseq_temp_OrderByInput>;
};


export type Querycount_genseq_tempArgs = {
  where?: InputMaybe<genseq_temp_WhereInput>;
};


export type Queryhtml_alignmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<html_alignment_WhereInput>;
  orderBy?: InputMaybe<html_alignment_OrderByInput>;
};


export type Querycount_html_alignmentArgs = {
  where?: InputMaybe<html_alignment_WhereInput>;
};


export type QuerykeywordsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<keywords_WhereInput>;
  orderBy?: InputMaybe<keywords_OrderByInput>;
};


export type Querycount_keywordsArgs = {
  where?: InputMaybe<keywords_WhereInput>;
};


export type Queryliterature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<literature_reference_WhereInput>;
  orderBy?: InputMaybe<literature_reference_OrderByInput>;
};


export type Querycount_literature_referenceArgs = {
  where?: InputMaybe<literature_reference_WhereInput>;
};


export type Querymatches_and_fastaArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<matches_and_fasta_WhereInput>;
  orderBy?: InputMaybe<matches_and_fasta_OrderByInput>;
};


export type Querycount_matches_and_fastaArgs = {
  where?: InputMaybe<matches_and_fasta_WhereInput>;
};


export type QuerymotifArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_WhereInput>;
  orderBy?: InputMaybe<motif_OrderByInput>;
};


export type Querycount_motifArgs = {
  where?: InputMaybe<motif_WhereInput>;
};


export type Querymotif_database_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_database_link_WhereInput>;
  orderBy?: InputMaybe<motif_database_link_OrderByInput>;
};


export type Querycount_motif_database_linkArgs = {
  where?: InputMaybe<motif_database_link_WhereInput>;
};


export type Querymotif_family_statsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_family_stats_WhereInput>;
  orderBy?: InputMaybe<motif_family_stats_OrderByInput>;
};


export type Querycount_motif_family_statsArgs = {
  where?: InputMaybe<motif_family_stats_WhereInput>;
};


export type Querymotif_fileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_file_WhereInput>;
  orderBy?: InputMaybe<motif_file_OrderByInput>;
};


export type Querycount_motif_fileArgs = {
  where?: InputMaybe<motif_file_WhereInput>;
};


export type Querymotif_literatureArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_literature_WhereInput>;
  orderBy?: InputMaybe<motif_literature_OrderByInput>;
};


export type Querycount_motif_literatureArgs = {
  where?: InputMaybe<motif_literature_WhereInput>;
};


export type Querymotif_matchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_matches_WhereInput>;
  orderBy?: InputMaybe<motif_matches_OrderByInput>;
};


export type Querycount_motif_matchesArgs = {
  where?: InputMaybe<motif_matches_WhereInput>;
};


export type Querymotif_oldArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
};


export type Querycount_motif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
};


export type Querymotif_pdbArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_pdb_WhereInput>;
  orderBy?: InputMaybe<motif_pdb_OrderByInput>;
};


export type Querycount_motif_pdbArgs = {
  where?: InputMaybe<motif_pdb_WhereInput>;
};


export type Querymotif_ss_imageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_ss_image_WhereInput>;
  orderBy?: InputMaybe<motif_ss_image_OrderByInput>;
};


export type Querycount_motif_ss_imageArgs = {
  where?: InputMaybe<motif_ss_image_WhereInput>;
};


export type QuerypdbArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_WhereInput>;
  orderBy?: InputMaybe<pdb_OrderByInput>;
};


export type Querycount_pdbArgs = {
  where?: InputMaybe<pdb_WhereInput>;
};


export type Querypdb_full_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_full_region_WhereInput>;
  orderBy?: InputMaybe<pdb_full_region_OrderByInput>;
};


export type Querycount_pdb_full_regionArgs = {
  where?: InputMaybe<pdb_full_region_WhereInput>;
};


export type Querypdb_full_region_oldArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_full_region_old_WhereInput>;
  orderBy?: InputMaybe<pdb_full_region_old_OrderByInput>;
};


export type Querycount_pdb_full_region_oldArgs = {
  where?: InputMaybe<pdb_full_region_old_WhereInput>;
};


export type Querypdb_rfam_regArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
  orderBy?: InputMaybe<pdb_rfam_reg_OrderByInput>;
};


export type Querycount_pdb_rfam_regArgs = {
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
};


export type Querypdb_sequenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_sequence_WhereInput>;
  orderBy?: InputMaybe<pdb_sequence_OrderByInput>;
};


export type Querycount_pdb_sequenceArgs = {
  where?: InputMaybe<pdb_sequence_WhereInput>;
};


export type Queryprocessed_dataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<processed_data_WhereInput>;
  orderBy?: InputMaybe<processed_data_OrderByInput>;
};


export type Querycount_processed_dataArgs = {
  where?: InputMaybe<processed_data_WhereInput>;
};


export type QuerypseudoknotArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pseudoknot_WhereInput>;
  orderBy?: InputMaybe<pseudoknot_OrderByInput>;
};


export type Querycount_pseudoknotArgs = {
  where?: InputMaybe<pseudoknot_WhereInput>;
};


export type QueryrefseqArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<refseq_WhereInput>;
  orderBy?: InputMaybe<refseq_OrderByInput>;
};


export type Querycount_refseqArgs = {
  where?: InputMaybe<refseq_WhereInput>;
};


export type Queryrefseq_full_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<refseq_full_region_WhereInput>;
  orderBy?: InputMaybe<refseq_full_region_OrderByInput>;
};


export type Querycount_refseq_full_regionArgs = {
  where?: InputMaybe<refseq_full_region_WhereInput>;
};


export type QueryrfamseqArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
};


export type Querycount_rfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
};


export type Queryrfamseq_tempArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<rfamseq_temp_WhereInput>;
  orderBy?: InputMaybe<rfamseq_temp_OrderByInput>;
};


export type Querycount_rfamseq_tempArgs = {
  where?: InputMaybe<rfamseq_temp_WhereInput>;
};


export type Queryrnacentral_matchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<rnacentral_matches_WhereInput>;
  orderBy?: InputMaybe<rnacentral_matches_OrderByInput>;
};


export type Querycount_rnacentral_matchesArgs = {
  where?: InputMaybe<rnacentral_matches_WhereInput>;
};


export type Queryrscape_annotationsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<rscape_annotations_WhereInput>;
  orderBy?: InputMaybe<rscape_annotations_OrderByInput>;
};


export type Querycount_rscape_annotationsArgs = {
  where?: InputMaybe<rscape_annotations_WhereInput>;
};


export type Querysecondary_structure_imageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<secondary_structure_image_WhereInput>;
  orderBy?: InputMaybe<secondary_structure_image_OrderByInput>;
};


export type Querycount_secondary_structure_imageArgs = {
  where?: InputMaybe<secondary_structure_image_WhereInput>;
};


export type Queryseed_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<seed_region_WhereInput>;
  orderBy?: InputMaybe<seed_region_OrderByInput>;
};


export type Querycount_seed_regionArgs = {
  where?: InputMaybe<seed_region_WhereInput>;
};


export type QuerysunburstArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<sunburst_WhereInput>;
  orderBy?: InputMaybe<sunburst_OrderByInput>;
};


export type Querycount_sunburstArgs = {
  where?: InputMaybe<sunburst_WhereInput>;
};


export type Querytaxonomic_treeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<taxonomic_tree_WhereInput>;
  orderBy?: InputMaybe<taxonomic_tree_OrderByInput>;
};


export type Querycount_taxonomic_treeArgs = {
  where?: InputMaybe<taxonomic_tree_WhereInput>;
};


export type QuerytaxonomyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<taxonomy_WhereInput>;
  orderBy?: InputMaybe<taxonomy_OrderByInput>;
};


export type Querycount_taxonomyArgs = {
  where?: InputMaybe<taxonomy_WhereInput>;
};


export type Querytaxonomy_websearchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<taxonomy_websearch_WhereInput>;
  orderBy?: InputMaybe<taxonomy_websearch_OrderByInput>;
};


export type Querycount_taxonomy_websearchArgs = {
  where?: InputMaybe<taxonomy_websearch_WhereInput>;
};


export type QueryversionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<version_WhereInput>;
  orderBy?: InputMaybe<version_OrderByInput>;
};


export type Querycount_versionArgs = {
  where?: InputMaybe<version_WhereInput>;
};


export type QuerywikitextArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<wikitext_WhereInput>;
  orderBy?: InputMaybe<wikitext_OrderByInput>;
};


export type Querycount_wikitextArgs = {
  where?: InputMaybe<wikitext_WhereInput>;
};

export type _annotated_file = {
  rfam_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
  full?: Maybe<Scalars['String']>;
};

export type _annotated_file_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['String']>;
};

export type _annotated_file_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  seed?: InputMaybe<OrderBy>;
  cm?: InputMaybe<OrderBy>;
  full?: InputMaybe<OrderBy>;
};

export type OrderBy =
  | 'asc'
  | 'desc';

export type _family_file = {
  rfam_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
  family?: Maybe<Array<Maybe<family>>>;
};


export type _family_filefamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type family = {
  rfam_acc: Scalars['String'];
  rfam_id: Scalars['String'];
  auto_wiki: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  seed_source?: Maybe<Scalars['String']>;
  gathering_cutoff?: Maybe<Scalars['Float']>;
  trusted_cutoff?: Maybe<Scalars['Float']>;
  noise_cutoff?: Maybe<Scalars['Float']>;
  comment?: Maybe<Scalars['String']>;
  previous_id?: Maybe<Scalars['String']>;
  cmbuild?: Maybe<Scalars['String']>;
  cmcalibrate?: Maybe<Scalars['String']>;
  cmsearch?: Maybe<Scalars['String']>;
  num_seed?: Maybe<Scalars['BigInt']>;
  num_full?: Maybe<Scalars['BigInt']>;
  num_genome_seq?: Maybe<Scalars['BigInt']>;
  num_refseq?: Maybe<Scalars['BigInt']>;
  type?: Maybe<Scalars['String']>;
  structure_source?: Maybe<Scalars['String']>;
  number_of_species?: Maybe<Scalars['BigInt']>;
  number_3d_structures?: Maybe<Scalars['Int']>;
  num_pseudonokts?: Maybe<Scalars['Int']>;
  tax_seed?: Maybe<Scalars['String']>;
  ecmli_lambda?: Maybe<Scalars['Float']>;
  ecmli_mu?: Maybe<Scalars['Float']>;
  ecmli_cal_db?: Maybe<Scalars['Int']>;
  ecmli_cal_hits?: Maybe<Scalars['Int']>;
  maxl?: Maybe<Scalars['Int']>;
  clen?: Maybe<Scalars['Int']>;
  match_pair_node?: Maybe<Scalars['Int']>;
  hmm_tau?: Maybe<Scalars['Float']>;
  hmm_lambda?: Maybe<Scalars['Float']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
  _family_file?: Maybe<Array<Maybe<_family_file>>>;
  _overlap_membership?: Maybe<Array<Maybe<_overlap_membership>>>;
  _post_process?: Maybe<Array<Maybe<_post_process>>>;
  alignment_and_tree?: Maybe<Array<Maybe<alignment_and_tree>>>;
  clan_membership?: Maybe<Array<Maybe<clan_membership>>>;
  database_link?: Maybe<Array<Maybe<database_link>>>;
  wikitext?: Maybe<Array<Maybe<wikitext>>>;
  family_literature_reference?: Maybe<Array<Maybe<family_literature_reference>>>;
  family_long?: Maybe<Array<Maybe<family_long>>>;
  family_ncbi?: Maybe<Array<Maybe<family_ncbi>>>;
  full_region?: Maybe<Array<Maybe<full_region>>>;
  html_alignment?: Maybe<Array<Maybe<html_alignment>>>;
  matches_and_fasta?: Maybe<Array<Maybe<matches_and_fasta>>>;
  motif_family_stats?: Maybe<Array<Maybe<motif_family_stats>>>;
  motif_matches?: Maybe<Array<Maybe<motif_matches>>>;
  motif_ss_image?: Maybe<Array<Maybe<motif_ss_image>>>;
  pdb_rfam_reg?: Maybe<Array<Maybe<pdb_rfam_reg>>>;
  processed_data?: Maybe<Array<Maybe<processed_data>>>;
  pseudoknot?: Maybe<Array<Maybe<pseudoknot>>>;
  refseq_full_region?: Maybe<Array<Maybe<refseq_full_region>>>;
  secondary_structure_image?: Maybe<Array<Maybe<secondary_structure_image>>>;
  seed_region?: Maybe<Array<Maybe<seed_region>>>;
  sunburst?: Maybe<Array<Maybe<sunburst>>>;
};


export type family_family_fileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_family_file_WhereInput>;
  orderBy?: InputMaybe<_family_file_OrderByInput>;
};


export type family_overlap_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_overlap_membership_WhereInput>;
  orderBy?: InputMaybe<_overlap_membership_OrderByInput>;
};


export type family_post_processArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_post_process_WhereInput>;
  orderBy?: InputMaybe<_post_process_OrderByInput>;
};


export type familyalignment_and_treeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<alignment_and_tree_WhereInput>;
  orderBy?: InputMaybe<alignment_and_tree_OrderByInput>;
};


export type familyclan_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_membership_WhereInput>;
  orderBy?: InputMaybe<clan_membership_OrderByInput>;
};


export type familydatabase_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<database_link_WhereInput>;
  orderBy?: InputMaybe<database_link_OrderByInput>;
};


export type familywikitextArgs = {
  where?: InputMaybe<wikitext_WhereInput>;
  orderBy?: InputMaybe<wikitext_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type familyfamily_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_literature_reference_WhereInput>;
  orderBy?: InputMaybe<family_literature_reference_OrderByInput>;
};


export type familyfamily_longArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_long_WhereInput>;
  orderBy?: InputMaybe<family_long_OrderByInput>;
};


export type familyfamily_ncbiArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_ncbi_WhereInput>;
  orderBy?: InputMaybe<family_ncbi_OrderByInput>;
};


export type familyfull_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<full_region_WhereInput>;
  orderBy?: InputMaybe<full_region_OrderByInput>;
};


export type familyhtml_alignmentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<html_alignment_WhereInput>;
  orderBy?: InputMaybe<html_alignment_OrderByInput>;
};


export type familymatches_and_fastaArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<matches_and_fasta_WhereInput>;
  orderBy?: InputMaybe<matches_and_fasta_OrderByInput>;
};


export type familymotif_family_statsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_family_stats_WhereInput>;
  orderBy?: InputMaybe<motif_family_stats_OrderByInput>;
};


export type familymotif_matchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_matches_WhereInput>;
  orderBy?: InputMaybe<motif_matches_OrderByInput>;
};


export type familymotif_ss_imageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_ss_image_WhereInput>;
  orderBy?: InputMaybe<motif_ss_image_OrderByInput>;
};


export type familypdb_rfam_regArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
  orderBy?: InputMaybe<pdb_rfam_reg_OrderByInput>;
};


export type familyprocessed_dataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<processed_data_WhereInput>;
  orderBy?: InputMaybe<processed_data_OrderByInput>;
};


export type familypseudoknotArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pseudoknot_WhereInput>;
  orderBy?: InputMaybe<pseudoknot_OrderByInput>;
};


export type familyrefseq_full_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<refseq_full_region_WhereInput>;
  orderBy?: InputMaybe<refseq_full_region_OrderByInput>;
};


export type familysecondary_structure_imageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<secondary_structure_image_WhereInput>;
  orderBy?: InputMaybe<secondary_structure_image_OrderByInput>;
};


export type familyseed_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<seed_region_WhereInput>;
  orderBy?: InputMaybe<seed_region_OrderByInput>;
};


export type familysunburstArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<sunburst_WhereInput>;
  orderBy?: InputMaybe<sunburst_OrderByInput>;
};

export type _family_file_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
};

export type _family_file_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  seed?: InputMaybe<OrderBy>;
  cm?: InputMaybe<OrderBy>;
};

export type _overlap_membership = {
  rfam_acc: Scalars['String'];
  auto_overlap: Scalars['Int'];
  family?: Maybe<Array<Maybe<family>>>;
  _overlap?: Maybe<Array<Maybe<_overlap>>>;
};


export type _overlap_membershipfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type _overlap_membership_overlapArgs = {
  where?: InputMaybe<_overlap_WhereInput>;
  orderBy?: InputMaybe<_overlap_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type family_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  auto_wiki?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['String']>;
  trusted_cutoff?: InputMaybe<Scalars['String']>;
  noise_cutoff?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  cmsearch?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['String']>;
  num_full?: InputMaybe<Scalars['String']>;
  num_genome_seq?: InputMaybe<Scalars['String']>;
  num_refseq?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  structure_source?: InputMaybe<Scalars['String']>;
  number_of_species?: InputMaybe<Scalars['String']>;
  number_3d_structures?: InputMaybe<Scalars['String']>;
  num_pseudonokts?: InputMaybe<Scalars['String']>;
  tax_seed?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['String']>;
  ecmli_mu?: InputMaybe<Scalars['String']>;
  ecmli_cal_db?: InputMaybe<Scalars['String']>;
  ecmli_cal_hits?: InputMaybe<Scalars['String']>;
  maxl?: InputMaybe<Scalars['String']>;
  clen?: InputMaybe<Scalars['String']>;
  match_pair_node?: InputMaybe<Scalars['String']>;
  hmm_tau?: InputMaybe<Scalars['String']>;
  hmm_lambda?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type family_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  rfam_id?: InputMaybe<OrderBy>;
  auto_wiki?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  seed_source?: InputMaybe<OrderBy>;
  gathering_cutoff?: InputMaybe<OrderBy>;
  trusted_cutoff?: InputMaybe<OrderBy>;
  noise_cutoff?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  previous_id?: InputMaybe<OrderBy>;
  cmbuild?: InputMaybe<OrderBy>;
  cmcalibrate?: InputMaybe<OrderBy>;
  cmsearch?: InputMaybe<OrderBy>;
  num_seed?: InputMaybe<OrderBy>;
  num_full?: InputMaybe<OrderBy>;
  num_genome_seq?: InputMaybe<OrderBy>;
  num_refseq?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  structure_source?: InputMaybe<OrderBy>;
  number_of_species?: InputMaybe<OrderBy>;
  number_3d_structures?: InputMaybe<OrderBy>;
  num_pseudonokts?: InputMaybe<OrderBy>;
  tax_seed?: InputMaybe<OrderBy>;
  ecmli_lambda?: InputMaybe<OrderBy>;
  ecmli_mu?: InputMaybe<OrderBy>;
  ecmli_cal_db?: InputMaybe<OrderBy>;
  ecmli_cal_hits?: InputMaybe<OrderBy>;
  maxl?: InputMaybe<OrderBy>;
  clen?: InputMaybe<OrderBy>;
  match_pair_node?: InputMaybe<OrderBy>;
  hmm_tau?: InputMaybe<OrderBy>;
  hmm_lambda?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type _overlap = {
  auto_overlap: Scalars['Int'];
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  _overlap_membership?: Maybe<Array<Maybe<_overlap_membership>>>;
};


export type _overlap_overlap_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<_overlap_membership_WhereInput>;
  orderBy?: InputMaybe<_overlap_membership_OrderByInput>;
};

export type _overlap_membership_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  auto_overlap?: InputMaybe<Scalars['String']>;
};

export type _overlap_membership_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  auto_overlap?: InputMaybe<OrderBy>;
};

export type _overlap_WhereInput = {
  auto_overlap?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type _overlap_OrderByInput = {
  auto_overlap?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
};

export type _post_process = {
  rfam_acc: Scalars['String'];
  author: Scalars['String'];
  uuid: Scalars['String'];
  status: _post_process_status;
  created: Scalars['DateTime'];
  opened?: Maybe<Scalars['DateTime']>;
  closed?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  lsf_id?: Maybe<Scalars['Int']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type _post_processfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type _post_process_status =
  | 'DONE'
  | 'PEND'
  | 'RUN'
  | 'FAIL'
  | 'KILL';

export type _post_process_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  opened?: InputMaybe<Scalars['String']>;
  closed?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['String']>;
};

export type _post_process_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  uuid?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  opened?: InputMaybe<OrderBy>;
  closed?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  lsf_id?: InputMaybe<OrderBy>;
};

export type alignment_and_tree = {
  rfam_acc: Scalars['String'];
  type: alignment_and_tree_type;
  alignment?: Maybe<Scalars['String']>;
  tree?: Maybe<Scalars['String']>;
  treemethod?: Maybe<Scalars['String']>;
  average_length?: Maybe<Scalars['Float']>;
  percent_id?: Maybe<Scalars['Float']>;
  number_of_sequences?: Maybe<Scalars['BigInt']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type alignment_and_treefamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type alignment_and_tree_type =
  | 'seed'
  | 'seedTax'
  | 'genome'
  | 'genomeTax';

export type alignment_and_tree_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  alignment?: InputMaybe<Scalars['String']>;
  tree?: InputMaybe<Scalars['String']>;
  treemethod?: InputMaybe<Scalars['String']>;
  average_length?: InputMaybe<Scalars['String']>;
  percent_id?: InputMaybe<Scalars['String']>;
  number_of_sequences?: InputMaybe<Scalars['String']>;
};

export type alignment_and_tree_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  alignment?: InputMaybe<OrderBy>;
  tree?: InputMaybe<OrderBy>;
  treemethod?: InputMaybe<OrderBy>;
  average_length?: InputMaybe<OrderBy>;
  percent_id?: InputMaybe<OrderBy>;
  number_of_sequences?: InputMaybe<OrderBy>;
};

export type clan_membership = {
  clan_acc: Scalars['String'];
  rfam_acc: Scalars['String'];
  clan?: Maybe<Array<Maybe<clan>>>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type clan_membershipclanArgs = {
  where?: InputMaybe<clan_WhereInput>;
  orderBy?: InputMaybe<clan_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type clan_membershipfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type clan = {
  clan_acc: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  previous_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
  clan_database_link?: Maybe<Array<Maybe<clan_database_link>>>;
  clan_literature_reference?: Maybe<Array<Maybe<clan_literature_reference>>>;
  clan_membership?: Maybe<Array<Maybe<clan_membership>>>;
};


export type clanclan_database_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_database_link_WhereInput>;
  orderBy?: InputMaybe<clan_database_link_OrderByInput>;
};


export type clanclan_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_literature_reference_WhereInput>;
  orderBy?: InputMaybe<clan_literature_reference_OrderByInput>;
};


export type clanclan_membershipArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_membership_WhereInput>;
  orderBy?: InputMaybe<clan_membership_OrderByInput>;
};

export type clan_database_link = {
  clan_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: Maybe<Scalars['String']>;
  clan?: Maybe<Array<Maybe<clan>>>;
};


export type clan_database_linkclanArgs = {
  where?: InputMaybe<clan_WhereInput>;
  orderBy?: InputMaybe<clan_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type clan_WhereInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type clan_OrderByInput = {
  clan_acc?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  previous_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type clan_database_link_WhereInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type clan_database_link_OrderByInput = {
  clan_acc?: InputMaybe<OrderBy>;
  db_id?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  db_link?: InputMaybe<OrderBy>;
  other_params?: InputMaybe<OrderBy>;
};

export type clan_literature_reference = {
  clan_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  order_added?: Maybe<Scalars['Int']>;
  clan?: Maybe<Array<Maybe<clan>>>;
  literature_reference?: Maybe<Array<Maybe<literature_reference>>>;
};


export type clan_literature_referenceclanArgs = {
  where?: InputMaybe<clan_WhereInput>;
  orderBy?: InputMaybe<clan_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type clan_literature_referenceliterature_referenceArgs = {
  where?: InputMaybe<literature_reference_WhereInput>;
  orderBy?: InputMaybe<literature_reference_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type literature_reference = {
  pmid: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  journal?: Maybe<Scalars['String']>;
  clan_literature_reference?: Maybe<Array<Maybe<clan_literature_reference>>>;
  family_literature_reference?: Maybe<Array<Maybe<family_literature_reference>>>;
  motif_literature?: Maybe<Array<Maybe<motif_literature>>>;
};


export type literature_referenceclan_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<clan_literature_reference_WhereInput>;
  orderBy?: InputMaybe<clan_literature_reference_OrderByInput>;
};


export type literature_referencefamily_literature_referenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_literature_reference_WhereInput>;
  orderBy?: InputMaybe<family_literature_reference_OrderByInput>;
};


export type literature_referencemotif_literatureArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_literature_WhereInput>;
  orderBy?: InputMaybe<motif_literature_OrderByInput>;
};

export type clan_literature_reference_WhereInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['String']>;
};

export type clan_literature_reference_OrderByInput = {
  clan_acc?: InputMaybe<OrderBy>;
  pmid?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  order_added?: InputMaybe<OrderBy>;
};

export type family_literature_reference = {
  rfam_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  order_added?: Maybe<Scalars['Int']>;
  family?: Maybe<Array<Maybe<family>>>;
  literature_reference?: Maybe<Array<Maybe<literature_reference>>>;
};


export type family_literature_referencefamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type family_literature_referenceliterature_referenceArgs = {
  where?: InputMaybe<literature_reference_WhereInput>;
  orderBy?: InputMaybe<literature_reference_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type literature_reference_WhereInput = {
  pmid?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  journal?: InputMaybe<Scalars['String']>;
};

export type literature_reference_OrderByInput = {
  pmid?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  journal?: InputMaybe<OrderBy>;
};

export type family_literature_reference_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['String']>;
};

export type family_literature_reference_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  pmid?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  order_added?: InputMaybe<OrderBy>;
};

export type motif_literature = {
  motif_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: Maybe<Scalars['String']>;
  order_added?: Maybe<Scalars['Int']>;
  literature_reference?: Maybe<Array<Maybe<literature_reference>>>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
};


export type motif_literatureliterature_referenceArgs = {
  where?: InputMaybe<literature_reference_WhereInput>;
  orderBy?: InputMaybe<literature_reference_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type motif_literaturemotif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_old = {
  motif_acc: Scalars['String'];
  motif_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  seed_source?: Maybe<Scalars['String']>;
  gathering_cutoff?: Maybe<Scalars['Float']>;
  trusted_cutoff?: Maybe<Scalars['Float']>;
  noise_cutoff?: Maybe<Scalars['Float']>;
  cmbuild?: Maybe<Scalars['String']>;
  cmcalibrate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  ecmli_lambda?: Maybe<Scalars['Float']>;
  ecmli_mu?: Maybe<Scalars['Float']>;
  ecmli_cal_db?: Maybe<Scalars['Int']>;
  ecmli_cal_hits?: Maybe<Scalars['Int']>;
  maxl?: Maybe<Scalars['Int']>;
  clen?: Maybe<Scalars['Int']>;
  match_pair_node?: Maybe<Scalars['Int']>;
  hmm_tau?: Maybe<Scalars['Float']>;
  hmm_lambda?: Maybe<Scalars['Float']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
  motif_family_stats?: Maybe<Array<Maybe<motif_family_stats>>>;
  motif_literature?: Maybe<Array<Maybe<motif_literature>>>;
  motif_matches?: Maybe<Array<Maybe<motif_matches>>>;
  motif_pdb?: Maybe<Array<Maybe<motif_pdb>>>;
  motif_ss_image?: Maybe<Array<Maybe<motif_ss_image>>>;
};


export type motif_oldmotif_family_statsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_family_stats_WhereInput>;
  orderBy?: InputMaybe<motif_family_stats_OrderByInput>;
};


export type motif_oldmotif_literatureArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_literature_WhereInput>;
  orderBy?: InputMaybe<motif_literature_OrderByInput>;
};


export type motif_oldmotif_matchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_matches_WhereInput>;
  orderBy?: InputMaybe<motif_matches_OrderByInput>;
};


export type motif_oldmotif_pdbArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_pdb_WhereInput>;
  orderBy?: InputMaybe<motif_pdb_OrderByInput>;
};


export type motif_oldmotif_ss_imageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_ss_image_WhereInput>;
  orderBy?: InputMaybe<motif_ss_image_OrderByInput>;
};

export type motif_family_stats = {
  rfam_acc: Scalars['String'];
  motif_acc: Scalars['String'];
  num_hits?: Maybe<Scalars['Int']>;
  frac_hits?: Maybe<Scalars['Float']>;
  sum_bits?: Maybe<Scalars['Float']>;
  avg_weight_bits?: Maybe<Scalars['Float']>;
  family?: Maybe<Array<Maybe<family>>>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
};


export type motif_family_statsfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type motif_family_statsmotif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_old_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['String']>;
  trusted_cutoff?: InputMaybe<Scalars['String']>;
  noise_cutoff?: InputMaybe<Scalars['String']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['String']>;
  ecmli_mu?: InputMaybe<Scalars['String']>;
  ecmli_cal_db?: InputMaybe<Scalars['String']>;
  ecmli_cal_hits?: InputMaybe<Scalars['String']>;
  maxl?: InputMaybe<Scalars['String']>;
  clen?: InputMaybe<Scalars['String']>;
  match_pair_node?: InputMaybe<Scalars['String']>;
  hmm_tau?: InputMaybe<Scalars['String']>;
  hmm_lambda?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type motif_old_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  motif_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  seed_source?: InputMaybe<OrderBy>;
  gathering_cutoff?: InputMaybe<OrderBy>;
  trusted_cutoff?: InputMaybe<OrderBy>;
  noise_cutoff?: InputMaybe<OrderBy>;
  cmbuild?: InputMaybe<OrderBy>;
  cmcalibrate?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  ecmli_lambda?: InputMaybe<OrderBy>;
  ecmli_mu?: InputMaybe<OrderBy>;
  ecmli_cal_db?: InputMaybe<OrderBy>;
  ecmli_cal_hits?: InputMaybe<OrderBy>;
  maxl?: InputMaybe<OrderBy>;
  clen?: InputMaybe<OrderBy>;
  match_pair_node?: InputMaybe<OrderBy>;
  hmm_tau?: InputMaybe<OrderBy>;
  hmm_lambda?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type motif_family_stats_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  motif_acc?: InputMaybe<Scalars['String']>;
  num_hits?: InputMaybe<Scalars['String']>;
  frac_hits?: InputMaybe<Scalars['String']>;
  sum_bits?: InputMaybe<Scalars['String']>;
  avg_weight_bits?: InputMaybe<Scalars['String']>;
};

export type motif_family_stats_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  motif_acc?: InputMaybe<OrderBy>;
  num_hits?: InputMaybe<OrderBy>;
  frac_hits?: InputMaybe<OrderBy>;
  sum_bits?: InputMaybe<OrderBy>;
  avg_weight_bits?: InputMaybe<OrderBy>;
};

export type motif_literature_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['String']>;
};

export type motif_literature_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  pmid?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  order_added?: InputMaybe<OrderBy>;
};

export type motif_matches = {
  motif_acc: Scalars['String'];
  rfam_acc: Scalars['String'];
  rfamseq_acc?: Maybe<Scalars['String']>;
  rfamseq_start?: Maybe<Scalars['BigInt']>;
  rfamseq_stop?: Maybe<Scalars['BigInt']>;
  query_start?: Maybe<Scalars['Int']>;
  query_stop?: Maybe<Scalars['Int']>;
  motif_start?: Maybe<Scalars['Int']>;
  motif_stop?: Maybe<Scalars['Int']>;
  e_value?: Maybe<Scalars['String']>;
  bit_score?: Maybe<Scalars['Float']>;
  family?: Maybe<Array<Maybe<family>>>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type motif_matchesfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type motif_matchesmotif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type motif_matchesrfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type rfamseq = {
  /** This should be  */
  rfamseq_acc: Scalars['String'];
  accession: Scalars['String'];
  version: Scalars['Int'];
  ncbi_id: Scalars['Int'];
  mol_type: rfamseq_mol_type;
  length?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  previous_acc?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  features?: Maybe<Array<Maybe<features>>>;
  full_region?: Maybe<Array<Maybe<full_region>>>;
  motif_matches?: Maybe<Array<Maybe<motif_matches>>>;
  pdb_rfam_reg?: Maybe<Array<Maybe<pdb_rfam_reg>>>;
  taxonomy?: Maybe<Array<Maybe<taxonomy>>>;
  seed_region?: Maybe<Array<Maybe<seed_region>>>;
};


export type rfamseqfeaturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<features_WhereInput>;
  orderBy?: InputMaybe<features_OrderByInput>;
};


export type rfamseqfull_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<full_region_WhereInput>;
  orderBy?: InputMaybe<full_region_OrderByInput>;
};


export type rfamseqmotif_matchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_matches_WhereInput>;
  orderBy?: InputMaybe<motif_matches_OrderByInput>;
};


export type rfamseqpdb_rfam_regArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
  orderBy?: InputMaybe<pdb_rfam_reg_OrderByInput>;
};


export type rfamseqtaxonomyArgs = {
  where?: InputMaybe<taxonomy_WhereInput>;
  orderBy?: InputMaybe<taxonomy_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type rfamseqseed_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<seed_region_WhereInput>;
  orderBy?: InputMaybe<seed_region_OrderByInput>;
};

export type rfamseq_mol_type =
  | 'protein'
  | 'genomic_DNA'
  | 'DNA'
  | 'ss_DNA'
  | 'RNA'
  | 'genomic_RNA'
  | 'ds_RNA'
  | 'ss_cRNA'
  | 'ss_RNA'
  | 'mRNA'
  | 'tRNA'
  | 'rRNA'
  | 'snoRNA'
  | 'snRNA'
  | 'scRNA'
  | 'pre_RNA'
  | 'other_RNA'
  | 'other_DNA'
  | 'unassigned_DNA'
  | 'unassigned_RNA'
  | 'viral_cRNA'
  | 'cRNA'
  | 'transcribed_RNA'
  | 'ncRNA'
  | 'ribozyme'
  | 'antisense_RNA'
  | 'other';

export type features = {
  rfamseq_acc?: Maybe<Scalars['String']>;
  database_id: Scalars['String'];
  primary_id: Scalars['String'];
  secondary_id?: Maybe<Scalars['String']>;
  feat_orient: Scalars['Int'];
  feat_start: Scalars['BigInt'];
  feat_end: Scalars['BigInt'];
  quaternary_id?: Maybe<Scalars['String']>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type featuresrfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type rfamseq_WhereInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  accession?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  ncbi_id?: InputMaybe<Scalars['String']>;
  mol_type?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  previous_acc?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type rfamseq_OrderByInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<OrderBy>;
  accession?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
  ncbi_id?: InputMaybe<OrderBy>;
  mol_type?: InputMaybe<OrderBy>;
  length?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  previous_acc?: InputMaybe<OrderBy>;
  source?: InputMaybe<OrderBy>;
};

export type features_WhereInput = {
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  database_id?: InputMaybe<Scalars['String']>;
  primary_id?: InputMaybe<Scalars['String']>;
  secondary_id?: InputMaybe<Scalars['String']>;
  feat_orient?: InputMaybe<Scalars['String']>;
  feat_start?: InputMaybe<Scalars['String']>;
  feat_end?: InputMaybe<Scalars['String']>;
  quaternary_id?: InputMaybe<Scalars['String']>;
};

export type features_OrderByInput = {
  rfamseq_acc?: InputMaybe<OrderBy>;
  database_id?: InputMaybe<OrderBy>;
  primary_id?: InputMaybe<OrderBy>;
  secondary_id?: InputMaybe<OrderBy>;
  feat_orient?: InputMaybe<OrderBy>;
  feat_start?: InputMaybe<OrderBy>;
  feat_end?: InputMaybe<OrderBy>;
  quaternary_id?: InputMaybe<OrderBy>;
};

export type full_region = {
  rfam_acc: Scalars['String'];
  rfamseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  /** 99999.99 is the approx limit from Infernal. */
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  truncated: full_region_truncated;
  type: full_region_type;
  is_significant: Scalars['Int'];
  family?: Maybe<Array<Maybe<family>>>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type full_regionfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type full_regionrfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type full_region_truncated =
  | '_0'
  | '_5'
  | '_3'
  | '_53';

export type full_region_type =
  | 'seed'
  | 'full';

export type full_region_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['String']>;
  seq_end?: InputMaybe<Scalars['String']>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<Scalars['String']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['String']>;
  cm_end?: InputMaybe<Scalars['String']>;
  truncated?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  is_significant?: InputMaybe<Scalars['String']>;
};

export type full_region_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  seq_start?: InputMaybe<OrderBy>;
  seq_end?: InputMaybe<OrderBy>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<OrderBy>;
  evalue_score?: InputMaybe<OrderBy>;
  cm_start?: InputMaybe<OrderBy>;
  cm_end?: InputMaybe<OrderBy>;
  truncated?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  is_significant?: InputMaybe<OrderBy>;
};

export type motif_matches_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  rfamseq_start?: InputMaybe<Scalars['String']>;
  rfamseq_stop?: InputMaybe<Scalars['String']>;
  query_start?: InputMaybe<Scalars['String']>;
  query_stop?: InputMaybe<Scalars['String']>;
  motif_start?: InputMaybe<Scalars['String']>;
  motif_stop?: InputMaybe<Scalars['String']>;
  e_value?: InputMaybe<Scalars['String']>;
  bit_score?: InputMaybe<Scalars['String']>;
};

export type motif_matches_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  rfam_acc?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  rfamseq_start?: InputMaybe<OrderBy>;
  rfamseq_stop?: InputMaybe<OrderBy>;
  query_start?: InputMaybe<OrderBy>;
  query_stop?: InputMaybe<OrderBy>;
  motif_start?: InputMaybe<OrderBy>;
  motif_stop?: InputMaybe<OrderBy>;
  e_value?: InputMaybe<OrderBy>;
  bit_score?: InputMaybe<OrderBy>;
};

export type pdb_rfam_reg = {
  auto_pdb_reg: Scalars['Int'];
  rfam_acc: Scalars['String'];
  pdb_seq: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: Maybe<Scalars['String']>;
  pdb_res_start?: Maybe<Scalars['Int']>;
  pdb_res_end?: Maybe<Scalars['Int']>;
  rfamseq_acc?: Maybe<Scalars['String']>;
  seq_start?: Maybe<Scalars['BigInt']>;
  seq_end?: Maybe<Scalars['BigInt']>;
  hex_colour?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
  pdb?: Maybe<Array<Maybe<pdb>>>;
  pdb_sequence?: Maybe<Array<Maybe<pdb_sequence>>>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type pdb_rfam_regfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type pdb_rfam_regpdbArgs = {
  where?: InputMaybe<pdb_WhereInput>;
  orderBy?: InputMaybe<pdb_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type pdb_rfam_regpdb_sequenceArgs = {
  where?: InputMaybe<pdb_sequence_WhereInput>;
  orderBy?: InputMaybe<pdb_sequence_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type pdb_rfam_regrfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type pdb = {
  pdb_id: Scalars['String'];
  keywords?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  resolution?: Maybe<Scalars['Float']>;
  method?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  pdb_rfam_reg?: Maybe<Array<Maybe<pdb_rfam_reg>>>;
  pdb_sequence?: Maybe<Array<Maybe<pdb_sequence>>>;
};


export type pdbpdb_rfam_regArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
  orderBy?: InputMaybe<pdb_rfam_reg_OrderByInput>;
};


export type pdbpdb_sequenceArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_sequence_WhereInput>;
  orderBy?: InputMaybe<pdb_sequence_OrderByInput>;
};

export type pdb_rfam_reg_WhereInput = {
  auto_pdb_reg?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_seq?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_res_start?: InputMaybe<Scalars['String']>;
  pdb_res_end?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['String']>;
  seq_end?: InputMaybe<Scalars['String']>;
  hex_colour?: InputMaybe<Scalars['String']>;
};

export type pdb_rfam_reg_OrderByInput = {
  auto_pdb_reg?: InputMaybe<OrderBy>;
  rfam_acc?: InputMaybe<OrderBy>;
  pdb_seq?: InputMaybe<OrderBy>;
  pdb_id?: InputMaybe<OrderBy>;
  chain?: InputMaybe<OrderBy>;
  pdb_res_start?: InputMaybe<OrderBy>;
  pdb_res_end?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  seq_start?: InputMaybe<OrderBy>;
  seq_end?: InputMaybe<OrderBy>;
  hex_colour?: InputMaybe<OrderBy>;
};

export type pdb_sequence = {
  pdb_seq: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: Maybe<Scalars['String']>;
  pdb_rfam_reg?: Maybe<Array<Maybe<pdb_rfam_reg>>>;
  pdb?: Maybe<Array<Maybe<pdb>>>;
};


export type pdb_sequencepdb_rfam_regArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
  orderBy?: InputMaybe<pdb_rfam_reg_OrderByInput>;
};


export type pdb_sequencepdbArgs = {
  where?: InputMaybe<pdb_WhereInput>;
  orderBy?: InputMaybe<pdb_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type pdb_WhereInput = {
  pdb_id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  resolution?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
};

export type pdb_OrderByInput = {
  pdb_id?: InputMaybe<OrderBy>;
  keywords?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  resolution?: InputMaybe<OrderBy>;
  method?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
};

export type pdb_sequence_WhereInput = {
  pdb_seq?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
};

export type pdb_sequence_OrderByInput = {
  pdb_seq?: InputMaybe<OrderBy>;
  pdb_id?: InputMaybe<OrderBy>;
  chain?: InputMaybe<OrderBy>;
};

export type taxonomy = {
  ncbi_id: Scalars['Int'];
  species: Scalars['String'];
  tax_string?: Maybe<Scalars['String']>;
  tree_display_name?: Maybe<Scalars['String']>;
  align_display_name?: Maybe<Scalars['String']>;
  family_ncbi?: Maybe<Array<Maybe<family_ncbi>>>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type taxonomyfamily_ncbiArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_ncbi_WhereInput>;
  orderBy?: InputMaybe<family_ncbi_OrderByInput>;
};


export type taxonomyrfamseqArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
};

export type family_ncbi = {
  ncbi_id: Scalars['Int'];
  /** Is this really needed? */
  rfam_id?: Maybe<Scalars['String']>;
  rfam_acc: Scalars['String'];
  family?: Maybe<Array<Maybe<family>>>;
  taxonomy?: Maybe<Array<Maybe<taxonomy>>>;
};


export type family_ncbifamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type family_ncbitaxonomyArgs = {
  where?: InputMaybe<taxonomy_WhereInput>;
  orderBy?: InputMaybe<taxonomy_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type taxonomy_WhereInput = {
  ncbi_id?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  tax_string?: InputMaybe<Scalars['String']>;
  tree_display_name?: InputMaybe<Scalars['String']>;
  align_display_name?: InputMaybe<Scalars['String']>;
};

export type taxonomy_OrderByInput = {
  ncbi_id?: InputMaybe<OrderBy>;
  species?: InputMaybe<OrderBy>;
  tax_string?: InputMaybe<OrderBy>;
  tree_display_name?: InputMaybe<OrderBy>;
  align_display_name?: InputMaybe<OrderBy>;
};

export type family_ncbi_WhereInput = {
  ncbi_id?: InputMaybe<Scalars['String']>;
  /** Is this really needed? */
  rfam_id?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
};

export type family_ncbi_OrderByInput = {
  ncbi_id?: InputMaybe<OrderBy>;
  /** Is this really needed? */
  rfam_id?: InputMaybe<OrderBy>;
  rfam_acc?: InputMaybe<OrderBy>;
};

export type seed_region = {
  rfam_acc: Scalars['String'];
  rfamseq_acc?: Maybe<Scalars['String']>;
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  md5?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
  rfamseq?: Maybe<Array<Maybe<rfamseq>>>;
};


export type seed_regionfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type seed_regionrfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
  orderBy?: InputMaybe<rfamseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type seed_region_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['String']>;
  seq_end?: InputMaybe<Scalars['String']>;
  md5?: InputMaybe<Scalars['String']>;
};

export type seed_region_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  seq_start?: InputMaybe<OrderBy>;
  seq_end?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
};

export type motif_pdb = {
  motif_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: Maybe<Scalars['String']>;
  pdb_start?: Maybe<Scalars['Int']>;
  pdb_end?: Maybe<Scalars['Int']>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
};


export type motif_pdbmotif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_pdb_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['String']>;
  pdb_end?: InputMaybe<Scalars['String']>;
};

export type motif_pdb_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  pdb_id?: InputMaybe<OrderBy>;
  chain?: InputMaybe<OrderBy>;
  pdb_start?: InputMaybe<OrderBy>;
  pdb_end?: InputMaybe<OrderBy>;
};

export type motif_ss_image = {
  rfam_acc: Scalars['String'];
  motif_acc: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
  motif_old?: Maybe<Array<Maybe<motif_old>>>;
};


export type motif_ss_imagefamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type motif_ss_imagemotif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
  orderBy?: InputMaybe<motif_old_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_ss_image_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  motif_acc?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type motif_ss_image_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  motif_acc?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
};

export type clan_membership_WhereInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
};

export type clan_membership_OrderByInput = {
  clan_acc?: InputMaybe<OrderBy>;
  rfam_acc?: InputMaybe<OrderBy>;
};

export type database_link = {
  rfam_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type database_linkfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type database_link_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type database_link_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  db_id?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  db_link?: InputMaybe<OrderBy>;
  other_params?: InputMaybe<OrderBy>;
};

export type wikitext = {
  auto_wiki: Scalars['Int'];
  title: Scalars['String'];
  family?: Maybe<Array<Maybe<family>>>;
};


export type wikitextfamilyArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
};

export type wikitext_WhereInput = {
  auto_wiki?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type wikitext_OrderByInput = {
  auto_wiki?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

export type family_long = {
  rfam_acc: Scalars['String'];
  referenece_structure?: Maybe<Scalars['String']>;
  reference_sequence?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type family_longfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type family_long_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  referenece_structure?: InputMaybe<Scalars['String']>;
  reference_sequence?: InputMaybe<Scalars['String']>;
};

export type family_long_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  referenece_structure?: InputMaybe<OrderBy>;
  reference_sequence?: InputMaybe<OrderBy>;
};

export type html_alignment = {
  rfam_acc: Scalars['String'];
  type: html_alignment_type;
  html?: Maybe<Scalars['String']>;
  block: Scalars['Int'];
  html_alignmentscol?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type html_alignmentfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type html_alignment_type =
  | 'seed'
  | 'genome'
  | 'seedColorstock'
  | 'genomeColorstock';

export type html_alignment_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  html?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['String']>;
  html_alignmentscol?: InputMaybe<Scalars['String']>;
};

export type html_alignment_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  html?: InputMaybe<OrderBy>;
  block?: InputMaybe<OrderBy>;
  html_alignmentscol?: InputMaybe<OrderBy>;
};

export type matches_and_fasta = {
  rfam_acc: Scalars['String'];
  match_list?: Maybe<Scalars['String']>;
  fasta?: Maybe<Scalars['String']>;
  type: matches_and_fasta_type;
  family?: Maybe<Array<Maybe<family>>>;
};


export type matches_and_fastafamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type matches_and_fasta_type =
  | 'rfamseq'
  | 'genome'
  | 'refseq';

export type matches_and_fasta_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  match_list?: InputMaybe<Scalars['String']>;
  fasta?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type matches_and_fasta_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  match_list?: InputMaybe<OrderBy>;
  fasta?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type processed_data = {
  rfam_acc: Scalars['String'];
  cm?: Maybe<Scalars['String']>;
  ss_stats_pbp?: Maybe<Scalars['String']>;
  ss_stats_seq?: Maybe<Scalars['String']>;
  ss_stats_fam?: Maybe<Scalars['String']>;
  scores_graph?: Maybe<Scalars['String']>;
  genome_full?: Maybe<Scalars['String']>;
  genome_full_md5?: Maybe<Scalars['String']>;
  refseq_full?: Maybe<Scalars['String']>;
  refseq_full_md5?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type processed_datafamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type processed_data_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
  ss_stats_pbp?: InputMaybe<Scalars['String']>;
  ss_stats_seq?: InputMaybe<Scalars['String']>;
  ss_stats_fam?: InputMaybe<Scalars['String']>;
  scores_graph?: InputMaybe<Scalars['String']>;
  genome_full?: InputMaybe<Scalars['String']>;
  genome_full_md5?: InputMaybe<Scalars['String']>;
  refseq_full?: InputMaybe<Scalars['String']>;
  refseq_full_md5?: InputMaybe<Scalars['String']>;
};

export type processed_data_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  cm?: InputMaybe<OrderBy>;
  ss_stats_pbp?: InputMaybe<OrderBy>;
  ss_stats_seq?: InputMaybe<OrderBy>;
  ss_stats_fam?: InputMaybe<OrderBy>;
  scores_graph?: InputMaybe<OrderBy>;
  genome_full?: InputMaybe<OrderBy>;
  genome_full_md5?: InputMaybe<OrderBy>;
  refseq_full?: InputMaybe<OrderBy>;
  refseq_full_md5?: InputMaybe<OrderBy>;
};

export type pseudoknot = {
  rfam_acc: Scalars['String'];
  pseudoknot_id: Scalars['String'];
  source: pseudoknot_source;
  covariation?: Maybe<Scalars['Int']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type pseudoknotfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type pseudoknot_source =
  | 'seed'
  | 'rscape';

export type pseudoknot_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pseudoknot_id?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  covariation?: InputMaybe<Scalars['String']>;
};

export type pseudoknot_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  pseudoknot_id?: InputMaybe<OrderBy>;
  source?: InputMaybe<OrderBy>;
  covariation?: InputMaybe<OrderBy>;
};

export type refseq_full_region = {
  rfam_acc: Scalars['String'];
  refseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  /** 99999.99 is the approx limit from Infernal. */
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  truncated: refseq_full_region_truncated;
  family?: Maybe<Array<Maybe<family>>>;
  refseq?: Maybe<Array<Maybe<refseq>>>;
};


export type refseq_full_regionfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type refseq_full_regionrefseqArgs = {
  where?: InputMaybe<refseq_WhereInput>;
  orderBy?: InputMaybe<refseq_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type refseq_full_region_truncated =
  | '_0'
  | '_5'
  | '_3'
  | '_53';

export type refseq = {
  refseq_acc: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  species?: Maybe<Scalars['String']>;
  ncbi_taxid?: Maybe<Scalars['Int']>;
  refseq_full_region?: Maybe<Array<Maybe<refseq_full_region>>>;
};


export type refseqrefseq_full_regionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<refseq_full_region_WhereInput>;
  orderBy?: InputMaybe<refseq_full_region_OrderByInput>;
};

export type refseq_full_region_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  refseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['String']>;
  seq_end?: InputMaybe<Scalars['String']>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<Scalars['String']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['String']>;
  cm_end?: InputMaybe<Scalars['String']>;
  truncated?: InputMaybe<Scalars['String']>;
};

export type refseq_full_region_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  refseq_acc?: InputMaybe<OrderBy>;
  seq_start?: InputMaybe<OrderBy>;
  seq_end?: InputMaybe<OrderBy>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<OrderBy>;
  evalue_score?: InputMaybe<OrderBy>;
  cm_start?: InputMaybe<OrderBy>;
  cm_end?: InputMaybe<OrderBy>;
  truncated?: InputMaybe<OrderBy>;
};

export type refseq_WhereInput = {
  refseq_acc?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  ncbi_taxid?: InputMaybe<Scalars['String']>;
};

export type refseq_OrderByInput = {
  refseq_acc?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  species?: InputMaybe<OrderBy>;
  ncbi_taxid?: InputMaybe<OrderBy>;
};

export type secondary_structure_image = {
  rfam_acc: Scalars['String'];
  type?: Maybe<secondary_structure_image_type>;
  image?: Maybe<Scalars['String']>;
  family?: Maybe<Array<Maybe<family>>>;
};


export type secondary_structure_imagefamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type secondary_structure_image_type =
  | 'cons'
  | 'dist'
  | 'ent'
  | 'fcbp'
  | 'cov'
  | 'disttruc'
  | 'maxcm'
  | 'norm'
  | 'rchie'
  | 'species'
  | 'ss'
  | 'rscape'
  | 'rscape_cyk';

export type secondary_structure_image_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type secondary_structure_image_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
};

export type sunburst = {
  rfam_acc: Scalars['String'];
  data: Scalars['String'];
  type: sunburst_type;
  family?: Maybe<Array<Maybe<family>>>;
};


export type sunburstfamilyArgs = {
  where?: InputMaybe<family_WhereInput>;
  orderBy?: InputMaybe<family_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type sunburst_type =
  | 'rfamseq'
  | 'genome'
  | 'refseq';

export type sunburst_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type sunburst_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  data?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type _genome_data = {
  data_file: Scalars['String'];
  author: Scalars['String'];
  uuid: Scalars['String'];
  status: _genome_data_status;
  created: Scalars['DateTime'];
  opened?: Maybe<Scalars['DateTime']>;
  closed?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  lsf_id?: Maybe<Scalars['Int']>;
};

export type _genome_data_status =
  | 'DONE'
  | 'PEND'
  | 'RUN'
  | 'FAIL'
  | 'KILL';

export type _genome_data_WhereInput = {
  data_file?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  opened?: InputMaybe<Scalars['String']>;
  closed?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['String']>;
};

export type _genome_data_OrderByInput = {
  data_file?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  uuid?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  opened?: InputMaybe<OrderBy>;
  closed?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  lsf_id?: InputMaybe<OrderBy>;
};

export type _lock = {
  locked: Scalars['Int'];
  locker: Scalars['String'];
  /** Do you lock individual families? Do ever lock the whole database? */
  allowCommits: Scalars['Int'];
  alsoAllow?: Maybe<Scalars['String']>;
};

export type _lock_WhereInput = {
  locked?: InputMaybe<Scalars['String']>;
  locker?: InputMaybe<Scalars['String']>;
  /** Do you lock individual families? Do ever lock the whole database? */
  allowCommits?: InputMaybe<Scalars['String']>;
  alsoAllow?: InputMaybe<Scalars['String']>;
};

export type _lock_OrderByInput = {
  locked?: InputMaybe<OrderBy>;
  locker?: InputMaybe<OrderBy>;
  /** Do you lock individual families? Do ever lock the whole database? */
  allowCommits?: InputMaybe<OrderBy>;
  alsoAllow?: InputMaybe<OrderBy>;
};

export type author = {
  author_id: Scalars['Int'];
  name: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  orcid?: Maybe<Scalars['String']>;
  synonyms?: Maybe<Scalars['String']>;
};

export type author_WhereInput = {
  author_id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  initials?: InputMaybe<Scalars['String']>;
  orcid?: InputMaybe<Scalars['String']>;
  synonyms?: InputMaybe<Scalars['String']>;
};

export type author_OrderByInput = {
  author_id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  initials?: InputMaybe<OrderBy>;
  orcid?: InputMaybe<OrderBy>;
  synonyms?: InputMaybe<OrderBy>;
};

export type db_version = {
  rfam_release: Scalars['Float'];
  rfam_release_date: Scalars['DateTime'];
  number_families: Scalars['Int'];
  embl_release: Scalars['String'];
  genome_collection_date?: Maybe<Scalars['DateTime']>;
  refseq_version?: Maybe<Scalars['Int']>;
  pdb_date?: Maybe<Scalars['DateTime']>;
  infernal_version?: Maybe<Scalars['String']>;
};

export type db_version_WhereInput = {
  rfam_release?: InputMaybe<Scalars['String']>;
  rfam_release_date?: InputMaybe<Scalars['String']>;
  number_families?: InputMaybe<Scalars['String']>;
  embl_release?: InputMaybe<Scalars['String']>;
  genome_collection_date?: InputMaybe<Scalars['String']>;
  refseq_version?: InputMaybe<Scalars['String']>;
  pdb_date?: InputMaybe<Scalars['String']>;
  infernal_version?: InputMaybe<Scalars['String']>;
};

export type db_version_OrderByInput = {
  rfam_release?: InputMaybe<OrderBy>;
  rfam_release_date?: InputMaybe<OrderBy>;
  number_families?: InputMaybe<OrderBy>;
  embl_release?: InputMaybe<OrderBy>;
  genome_collection_date?: InputMaybe<OrderBy>;
  refseq_version?: InputMaybe<OrderBy>;
  pdb_date?: InputMaybe<OrderBy>;
  infernal_version?: InputMaybe<OrderBy>;
};

export type dead_clan = {
  clan_acc: Scalars['String'];
  /** Added. Add author? */
  clan_id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  forward_to?: Maybe<Scalars['String']>;
  user: Scalars['String'];
};

export type dead_clan_WhereInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  /** Added. Add author? */
  clan_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type dead_clan_OrderByInput = {
  clan_acc?: InputMaybe<OrderBy>;
  /** Added. Add author? */
  clan_id?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  forward_to?: InputMaybe<OrderBy>;
  user?: InputMaybe<OrderBy>;
};

export type dead_family = {
  /** record the author??? */
  rfam_acc: Scalars['String'];
  rfam_id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  forward_to?: Maybe<Scalars['String']>;
  /**
   * wikipedia page title
   *
   */
  title?: Maybe<Scalars['String']>;
  user: Scalars['String'];
};

export type dead_family_WhereInput = {
  /** record the author??? */
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  /**
   * wikipedia page title
   *
   */
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type dead_family_OrderByInput = {
  /** record the author??? */
  rfam_acc?: InputMaybe<OrderBy>;
  rfam_id?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  forward_to?: InputMaybe<OrderBy>;
  /**
   * wikipedia page title
   *
   */
  title?: InputMaybe<OrderBy>;
  user?: InputMaybe<OrderBy>;
};

export type ensembl_names = {
  insdc: Scalars['String'];
  ensembl?: Maybe<Scalars['String']>;
};

export type ensembl_names_WhereInput = {
  insdc?: InputMaybe<Scalars['String']>;
  ensembl?: InputMaybe<Scalars['String']>;
};

export type ensembl_names_OrderByInput = {
  insdc?: InputMaybe<OrderBy>;
  ensembl?: InputMaybe<OrderBy>;
};

export type family_author = {
  rfam_acc: Scalars['String'];
  author_id: Scalars['Int'];
  desc_order: Scalars['Int'];
};

export type family_author_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  author_id?: InputMaybe<Scalars['String']>;
  desc_order?: InputMaybe<Scalars['String']>;
};

export type family_author_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  author_id?: InputMaybe<OrderBy>;
  desc_order?: InputMaybe<OrderBy>;
};

export type genome = {
  /** This should be  */
  upid: Scalars['String'];
  assembly_acc?: Maybe<Scalars['String']>;
  assembly_version?: Maybe<Scalars['Int']>;
  wgs_acc?: Maybe<Scalars['String']>;
  wgs_version?: Maybe<Scalars['Int']>;
  assembly_name?: Maybe<Scalars['String']>;
  assembly_level?: Maybe<genome_assembly_level>;
  study_ref?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  total_length?: Maybe<Scalars['BigInt']>;
  ungapped_length?: Maybe<Scalars['BigInt']>;
  circular?: Maybe<Scalars['Int']>;
  ncbi_id: Scalars['Int'];
  scientific_name?: Maybe<Scalars['String']>;
  common_name?: Maybe<Scalars['String']>;
  kingdom?: Maybe<Scalars['String']>;
  num_rfam_regions?: Maybe<Scalars['Int']>;
  num_families?: Maybe<Scalars['Int']>;
  is_reference: Scalars['Int'];
  is_representative: Scalars['Int'];
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type genome_assembly_level =
  | 'contig'
  | 'chromosome'
  | 'scaffold'
  | 'complete_genome';

export type genome_WhereInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['String']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['String']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<Scalars['String']>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['String']>;
  ungapped_length?: InputMaybe<Scalars['String']>;
  circular?: InputMaybe<Scalars['String']>;
  ncbi_id?: InputMaybe<Scalars['String']>;
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['String']>;
  num_families?: InputMaybe<Scalars['String']>;
  is_reference?: InputMaybe<Scalars['String']>;
  is_representative?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type genome_OrderByInput = {
  /** This should be  */
  upid?: InputMaybe<OrderBy>;
  assembly_acc?: InputMaybe<OrderBy>;
  assembly_version?: InputMaybe<OrderBy>;
  wgs_acc?: InputMaybe<OrderBy>;
  wgs_version?: InputMaybe<OrderBy>;
  assembly_name?: InputMaybe<OrderBy>;
  assembly_level?: InputMaybe<OrderBy>;
  study_ref?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  total_length?: InputMaybe<OrderBy>;
  ungapped_length?: InputMaybe<OrderBy>;
  circular?: InputMaybe<OrderBy>;
  ncbi_id?: InputMaybe<OrderBy>;
  scientific_name?: InputMaybe<OrderBy>;
  common_name?: InputMaybe<OrderBy>;
  kingdom?: InputMaybe<OrderBy>;
  num_rfam_regions?: InputMaybe<OrderBy>;
  num_families?: InputMaybe<OrderBy>;
  is_reference?: InputMaybe<OrderBy>;
  is_representative?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type genome_temp = {
  /** This should be  */
  upid: Scalars['String'];
  assembly_acc?: Maybe<Scalars['String']>;
  assembly_version?: Maybe<Scalars['Int']>;
  wgs_acc?: Maybe<Scalars['String']>;
  wgs_version?: Maybe<Scalars['Int']>;
  assembly_name?: Maybe<Scalars['String']>;
  assembly_level?: Maybe<genome_temp_assembly_level>;
  study_ref?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  total_length?: Maybe<Scalars['BigInt']>;
  ungapped_length?: Maybe<Scalars['BigInt']>;
  circular?: Maybe<Scalars['Int']>;
  ncbi_id: Scalars['Int'];
  scientific_name?: Maybe<Scalars['String']>;
  common_name?: Maybe<Scalars['String']>;
  kingdom?: Maybe<Scalars['String']>;
  num_rfam_regions?: Maybe<Scalars['Int']>;
  num_families?: Maybe<Scalars['Int']>;
  is_reference: Scalars['Int'];
  is_representative: Scalars['Int'];
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type genome_temp_assembly_level =
  | 'contig'
  | 'chromosome'
  | 'scaffold'
  | 'complete_genome';

export type genome_temp_WhereInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['String']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['String']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<Scalars['String']>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['String']>;
  ungapped_length?: InputMaybe<Scalars['String']>;
  circular?: InputMaybe<Scalars['String']>;
  ncbi_id?: InputMaybe<Scalars['String']>;
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['String']>;
  num_families?: InputMaybe<Scalars['String']>;
  is_reference?: InputMaybe<Scalars['String']>;
  is_representative?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type genome_temp_OrderByInput = {
  /** This should be  */
  upid?: InputMaybe<OrderBy>;
  assembly_acc?: InputMaybe<OrderBy>;
  assembly_version?: InputMaybe<OrderBy>;
  wgs_acc?: InputMaybe<OrderBy>;
  wgs_version?: InputMaybe<OrderBy>;
  assembly_name?: InputMaybe<OrderBy>;
  assembly_level?: InputMaybe<OrderBy>;
  study_ref?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  total_length?: InputMaybe<OrderBy>;
  ungapped_length?: InputMaybe<OrderBy>;
  circular?: InputMaybe<OrderBy>;
  ncbi_id?: InputMaybe<OrderBy>;
  scientific_name?: InputMaybe<OrderBy>;
  common_name?: InputMaybe<OrderBy>;
  kingdom?: InputMaybe<OrderBy>;
  num_rfam_regions?: InputMaybe<OrderBy>;
  num_families?: InputMaybe<OrderBy>;
  is_reference?: InputMaybe<OrderBy>;
  is_representative?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type genseq = {
  /** This should be  */
  upid: Scalars['String'];
  rfamseq_acc?: Maybe<Scalars['String']>;
  chromosome_name?: Maybe<Scalars['String']>;
  chromosome_type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type genseq_WhereInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type genseq_OrderByInput = {
  /** This should be  */
  upid?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  chromosome_name?: InputMaybe<OrderBy>;
  chromosome_type?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type genseq_temp = {
  /** This should be  */
  upid: Scalars['String'];
  rfamseq_acc?: Maybe<Scalars['String']>;
  chromosome_name?: Maybe<Scalars['String']>;
  chromosome_type?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type genseq_temp_WhereInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type genseq_temp_OrderByInput = {
  /** This should be  */
  upid?: InputMaybe<OrderBy>;
  rfamseq_acc?: InputMaybe<OrderBy>;
  chromosome_name?: InputMaybe<OrderBy>;
  chromosome_type?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type keywords = {
  rfam_acc: Scalars['String'];
  rfam_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rfam_general?: Maybe<Scalars['String']>;
  literature?: Maybe<Scalars['String']>;
  wiki?: Maybe<Scalars['String']>;
  pdb_mappings?: Maybe<Scalars['String']>;
  clan_info?: Maybe<Scalars['String']>;
};

export type keywords_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  rfam_general?: InputMaybe<Scalars['String']>;
  literature?: InputMaybe<Scalars['String']>;
  wiki?: InputMaybe<Scalars['String']>;
  pdb_mappings?: InputMaybe<Scalars['String']>;
  clan_info?: InputMaybe<Scalars['String']>;
};

export type keywords_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  rfam_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  rfam_general?: InputMaybe<OrderBy>;
  literature?: InputMaybe<OrderBy>;
  wiki?: InputMaybe<OrderBy>;
  pdb_mappings?: InputMaybe<OrderBy>;
  clan_info?: InputMaybe<OrderBy>;
};

export type motif = {
  motif_acc: Scalars['String'];
  motif_id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  seed_source?: Maybe<Scalars['String']>;
  gathering_cutoff?: Maybe<Scalars['Float']>;
  trusted_cutoff?: Maybe<Scalars['Float']>;
  noise_cutoff?: Maybe<Scalars['Float']>;
  cmbuild?: Maybe<Scalars['String']>;
  cmcalibrate?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  num_seed?: Maybe<Scalars['BigInt']>;
  average_id?: Maybe<Scalars['Float']>;
  average_sqlen?: Maybe<Scalars['Float']>;
  ecmli_lambda?: Maybe<Scalars['Float']>;
  ecmli_mu?: Maybe<Scalars['Float']>;
  ecmli_cal_db?: Maybe<Scalars['Int']>;
  ecmli_cal_hits?: Maybe<Scalars['Int']>;
  maxl?: Maybe<Scalars['Int']>;
  clen?: Maybe<Scalars['Int']>;
  match_pair_node?: Maybe<Scalars['Int']>;
  hmm_tau?: Maybe<Scalars['Float']>;
  hmm_lambda?: Maybe<Scalars['Float']>;
  wiki?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
  motif_database_link?: Maybe<Array<Maybe<motif_database_link>>>;
  motif_file?: Maybe<Array<Maybe<motif_file>>>;
};


export type motifmotif_database_linkArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_database_link_WhereInput>;
  orderBy?: InputMaybe<motif_database_link_OrderByInput>;
};


export type motifmotif_fileArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<motif_file_WhereInput>;
  orderBy?: InputMaybe<motif_file_OrderByInput>;
};

export type motif_database_link = {
  motif_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: Maybe<Scalars['String']>;
  motif?: Maybe<Array<Maybe<motif>>>;
};


export type motif_database_linkmotifArgs = {
  where?: InputMaybe<motif_WhereInput>;
  orderBy?: InputMaybe<motif_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['String']>;
  trusted_cutoff?: InputMaybe<Scalars['String']>;
  noise_cutoff?: InputMaybe<Scalars['String']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['String']>;
  average_id?: InputMaybe<Scalars['String']>;
  average_sqlen?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['String']>;
  ecmli_mu?: InputMaybe<Scalars['String']>;
  ecmli_cal_db?: InputMaybe<Scalars['String']>;
  ecmli_cal_hits?: InputMaybe<Scalars['String']>;
  maxl?: InputMaybe<Scalars['String']>;
  clen?: InputMaybe<Scalars['String']>;
  match_pair_node?: InputMaybe<Scalars['String']>;
  hmm_tau?: InputMaybe<Scalars['String']>;
  hmm_lambda?: InputMaybe<Scalars['String']>;
  wiki?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type motif_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  motif_id?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  author?: InputMaybe<OrderBy>;
  seed_source?: InputMaybe<OrderBy>;
  gathering_cutoff?: InputMaybe<OrderBy>;
  trusted_cutoff?: InputMaybe<OrderBy>;
  noise_cutoff?: InputMaybe<OrderBy>;
  cmbuild?: InputMaybe<OrderBy>;
  cmcalibrate?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  num_seed?: InputMaybe<OrderBy>;
  average_id?: InputMaybe<OrderBy>;
  average_sqlen?: InputMaybe<OrderBy>;
  ecmli_lambda?: InputMaybe<OrderBy>;
  ecmli_mu?: InputMaybe<OrderBy>;
  ecmli_cal_db?: InputMaybe<OrderBy>;
  ecmli_cal_hits?: InputMaybe<OrderBy>;
  maxl?: InputMaybe<OrderBy>;
  clen?: InputMaybe<OrderBy>;
  match_pair_node?: InputMaybe<OrderBy>;
  hmm_tau?: InputMaybe<OrderBy>;
  hmm_lambda?: InputMaybe<OrderBy>;
  wiki?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  updated?: InputMaybe<OrderBy>;
};

export type motif_database_link_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type motif_database_link_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  db_id?: InputMaybe<OrderBy>;
  comment?: InputMaybe<OrderBy>;
  db_link?: InputMaybe<OrderBy>;
  other_params?: InputMaybe<OrderBy>;
};

export type motif_file = {
  motif_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
  motif?: Maybe<Array<Maybe<motif>>>;
};


export type motif_filemotifArgs = {
  where?: InputMaybe<motif_WhereInput>;
  orderBy?: InputMaybe<motif_OrderByInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type motif_file_WhereInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
};

export type motif_file_OrderByInput = {
  motif_acc?: InputMaybe<OrderBy>;
  seed?: InputMaybe<OrderBy>;
  cm?: InputMaybe<OrderBy>;
};

export type pdb_full_region = {
  rfam_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: Maybe<Scalars['String']>;
  pdb_start: Scalars['Int'];
  pdb_end: Scalars['Int'];
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  hex_colour?: Maybe<Scalars['String']>;
  is_significant: Scalars['Int'];
};

export type pdb_full_region_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['String']>;
  pdb_end?: InputMaybe<Scalars['String']>;
  bit_score?: InputMaybe<Scalars['String']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['String']>;
  cm_end?: InputMaybe<Scalars['String']>;
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant?: InputMaybe<Scalars['String']>;
};

export type pdb_full_region_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  pdb_id?: InputMaybe<OrderBy>;
  chain?: InputMaybe<OrderBy>;
  pdb_start?: InputMaybe<OrderBy>;
  pdb_end?: InputMaybe<OrderBy>;
  bit_score?: InputMaybe<OrderBy>;
  evalue_score?: InputMaybe<OrderBy>;
  cm_start?: InputMaybe<OrderBy>;
  cm_end?: InputMaybe<OrderBy>;
  hex_colour?: InputMaybe<OrderBy>;
  is_significant?: InputMaybe<OrderBy>;
};

export type pdb_full_region_old = {
  rfam_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: Maybe<Scalars['String']>;
  pdb_start: Scalars['Int'];
  pdb_end: Scalars['Int'];
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  hex_colour?: Maybe<Scalars['String']>;
  is_significant: Scalars['Int'];
};

export type pdb_full_region_old_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['String']>;
  pdb_end?: InputMaybe<Scalars['String']>;
  bit_score?: InputMaybe<Scalars['String']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['String']>;
  cm_end?: InputMaybe<Scalars['String']>;
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant?: InputMaybe<Scalars['String']>;
};

export type pdb_full_region_old_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  pdb_id?: InputMaybe<OrderBy>;
  chain?: InputMaybe<OrderBy>;
  pdb_start?: InputMaybe<OrderBy>;
  pdb_end?: InputMaybe<OrderBy>;
  bit_score?: InputMaybe<OrderBy>;
  evalue_score?: InputMaybe<OrderBy>;
  cm_start?: InputMaybe<OrderBy>;
  cm_end?: InputMaybe<OrderBy>;
  hex_colour?: InputMaybe<OrderBy>;
  is_significant?: InputMaybe<OrderBy>;
};

export type rfamseq_temp = {
  /** This should be  */
  rfamseq_acc: Scalars['String'];
  accession: Scalars['String'];
  version: Scalars['Int'];
  ncbi_id: Scalars['Int'];
  mol_type: rfamseq_temp_mol_type;
  length?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  previous_acc?: Maybe<Scalars['String']>;
  source: Scalars['String'];
};

export type rfamseq_temp_mol_type =
  | 'protein'
  | 'genomic_DNA'
  | 'DNA'
  | 'ss_DNA'
  | 'RNA'
  | 'genomic_RNA'
  | 'ds_RNA'
  | 'ss_cRNA'
  | 'ss_RNA'
  | 'mRNA'
  | 'tRNA'
  | 'rRNA'
  | 'snoRNA'
  | 'snRNA'
  | 'scRNA'
  | 'pre_RNA'
  | 'other_RNA'
  | 'other_DNA'
  | 'unassigned_DNA'
  | 'unassigned_RNA'
  | 'viral_cRNA'
  | 'cRNA'
  | 'transcribed_RNA'
  | 'ncRNA'
  | 'ribozyme'
  | 'antisense_RNA'
  | 'other';

export type rfamseq_temp_WhereInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  accession?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
  ncbi_id?: InputMaybe<Scalars['String']>;
  mol_type?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  previous_acc?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type rfamseq_temp_OrderByInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<OrderBy>;
  accession?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
  ncbi_id?: InputMaybe<OrderBy>;
  mol_type?: InputMaybe<OrderBy>;
  length?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  previous_acc?: InputMaybe<OrderBy>;
  source?: InputMaybe<OrderBy>;
};

export type rnacentral_matches = {
  rfamseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  md5: Scalars['String'];
  rnacentral_id?: Maybe<Scalars['String']>;
  type?: Maybe<rnacentral_matches_type>;
};

export type rnacentral_matches_type =
  | 'seed'
  | 'full';

export type rnacentral_matches_WhereInput = {
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['String']>;
  seq_end?: InputMaybe<Scalars['String']>;
  md5?: InputMaybe<Scalars['String']>;
  rnacentral_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type rnacentral_matches_OrderByInput = {
  rfamseq_acc?: InputMaybe<OrderBy>;
  seq_start?: InputMaybe<OrderBy>;
  seq_end?: InputMaybe<OrderBy>;
  md5?: InputMaybe<OrderBy>;
  rnacentral_id?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type rscape_annotations = {
  rfam_acc: Scalars['String'];
  F?: Maybe<Scalars['Float']>;
  sensitivity?: Maybe<Scalars['Float']>;
  ppv?: Maybe<Scalars['Float']>;
  true?: Maybe<Scalars['Int']>;
  found?: Maybe<Scalars['Int']>;
  tp?: Maybe<Scalars['Int']>;
  avgid?: Maybe<Scalars['Float']>;
  alen?: Maybe<Scalars['Int']>;
  nseq?: Maybe<Scalars['Int']>;
};

export type rscape_annotations_WhereInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  F?: InputMaybe<Scalars['String']>;
  sensitivity?: InputMaybe<Scalars['String']>;
  ppv?: InputMaybe<Scalars['String']>;
  true?: InputMaybe<Scalars['String']>;
  found?: InputMaybe<Scalars['String']>;
  tp?: InputMaybe<Scalars['String']>;
  avgid?: InputMaybe<Scalars['String']>;
  alen?: InputMaybe<Scalars['String']>;
  nseq?: InputMaybe<Scalars['String']>;
};

export type rscape_annotations_OrderByInput = {
  rfam_acc?: InputMaybe<OrderBy>;
  F?: InputMaybe<OrderBy>;
  sensitivity?: InputMaybe<OrderBy>;
  ppv?: InputMaybe<OrderBy>;
  true?: InputMaybe<OrderBy>;
  found?: InputMaybe<OrderBy>;
  tp?: InputMaybe<OrderBy>;
  avgid?: InputMaybe<OrderBy>;
  alen?: InputMaybe<OrderBy>;
  nseq?: InputMaybe<OrderBy>;
};

export type taxonomic_tree = {
  ncbi_code: Scalars['Int'];
  species?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
  lft?: Maybe<Scalars['Int']>;
  rgt?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['String']>;
  level?: Maybe<Scalars['String']>;
};

export type taxonomic_tree_WhereInput = {
  ncbi_code?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['String']>;
  rgt?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
};

export type taxonomic_tree_OrderByInput = {
  ncbi_code?: InputMaybe<OrderBy>;
  species?: InputMaybe<OrderBy>;
  taxonomy?: InputMaybe<OrderBy>;
  lft?: InputMaybe<OrderBy>;
  rgt?: InputMaybe<OrderBy>;
  parent?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
};

export type taxonomy_websearch = {
  ncbi_id?: Maybe<Scalars['Int']>;
  species?: Maybe<Scalars['String']>;
  rgt?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<Scalars['String']>;
  lft?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['String']>;
  minimal: Scalars['Int'];
  rank?: Maybe<Scalars['String']>;
};

export type taxonomy_websearch_WhereInput = {
  ncbi_id?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  rgt?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
  minimal?: InputMaybe<Scalars['String']>;
  rank?: InputMaybe<Scalars['String']>;
};

export type taxonomy_websearch_OrderByInput = {
  ncbi_id?: InputMaybe<OrderBy>;
  species?: InputMaybe<OrderBy>;
  rgt?: InputMaybe<OrderBy>;
  taxonomy?: InputMaybe<OrderBy>;
  lft?: InputMaybe<OrderBy>;
  parent?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  minimal?: InputMaybe<OrderBy>;
  rank?: InputMaybe<OrderBy>;
};

export type version = {
  rfam_release: Scalars['Float'];
  rfam_release_date: Scalars['Date'];
  number_families: Scalars['Int'];
  embl_release: Scalars['String'];
};

export type version_WhereInput = {
  rfam_release?: InputMaybe<Scalars['String']>;
  rfam_release_date?: InputMaybe<Scalars['String']>;
  number_families?: InputMaybe<Scalars['String']>;
  embl_release?: InputMaybe<Scalars['String']>;
};

export type version_OrderByInput = {
  rfam_release?: InputMaybe<OrderBy>;
  rfam_release_date?: InputMaybe<OrderBy>;
  number_families?: InputMaybe<OrderBy>;
  embl_release?: InputMaybe<OrderBy>;
};

export type Mutation = {
  insert__annotated_file?: Maybe<_annotated_file>;
  update__annotated_file?: Maybe<_annotated_file>;
  delete__annotated_file?: Maybe<Scalars['Boolean']>;
  insert__family_file?: Maybe<_family_file>;
  update__family_file?: Maybe<_family_file>;
  delete__family_file?: Maybe<Scalars['Boolean']>;
  insert__genome_data?: Maybe<_genome_data>;
  update__genome_data?: Maybe<_genome_data>;
  delete__genome_data?: Maybe<Scalars['Boolean']>;
  insert__lock?: Maybe<_lock>;
  update__lock?: Maybe<_lock>;
  delete__lock?: Maybe<Scalars['Boolean']>;
  insert__overlap?: Maybe<_overlap>;
  update__overlap?: Maybe<_overlap>;
  delete__overlap?: Maybe<Scalars['Boolean']>;
  insert__overlap_membership?: Maybe<_overlap_membership>;
  update__overlap_membership?: Maybe<_overlap_membership>;
  delete__overlap_membership?: Maybe<Scalars['Boolean']>;
  insert__post_process?: Maybe<_post_process>;
  update__post_process?: Maybe<_post_process>;
  delete__post_process?: Maybe<Scalars['Boolean']>;
  insert_alignment_and_tree?: Maybe<alignment_and_tree>;
  update_alignment_and_tree?: Maybe<alignment_and_tree>;
  delete_alignment_and_tree?: Maybe<Scalars['Boolean']>;
  insert_author?: Maybe<author>;
  update_author?: Maybe<author>;
  delete_author?: Maybe<Scalars['Boolean']>;
  insert_clan?: Maybe<clan>;
  update_clan?: Maybe<clan>;
  delete_clan?: Maybe<Scalars['Boolean']>;
  insert_clan_database_link?: Maybe<clan_database_link>;
  update_clan_database_link?: Maybe<clan_database_link>;
  delete_clan_database_link?: Maybe<Scalars['Boolean']>;
  insert_clan_literature_reference?: Maybe<clan_literature_reference>;
  update_clan_literature_reference?: Maybe<clan_literature_reference>;
  delete_clan_literature_reference?: Maybe<Scalars['Boolean']>;
  insert_clan_membership?: Maybe<clan_membership>;
  update_clan_membership?: Maybe<clan_membership>;
  delete_clan_membership?: Maybe<Scalars['Boolean']>;
  insert_database_link?: Maybe<database_link>;
  update_database_link?: Maybe<database_link>;
  delete_database_link?: Maybe<Scalars['Boolean']>;
  insert_db_version?: Maybe<db_version>;
  update_db_version?: Maybe<db_version>;
  delete_db_version?: Maybe<Scalars['Boolean']>;
  insert_dead_clan?: Maybe<dead_clan>;
  update_dead_clan?: Maybe<dead_clan>;
  delete_dead_clan?: Maybe<Scalars['Boolean']>;
  insert_dead_family?: Maybe<dead_family>;
  update_dead_family?: Maybe<dead_family>;
  delete_dead_family?: Maybe<Scalars['Boolean']>;
  insert_ensembl_names?: Maybe<ensembl_names>;
  update_ensembl_names?: Maybe<ensembl_names>;
  delete_ensembl_names?: Maybe<Scalars['Boolean']>;
  insert_family?: Maybe<family>;
  update_family?: Maybe<family>;
  delete_family?: Maybe<Scalars['Boolean']>;
  insert_family_author?: Maybe<family_author>;
  update_family_author?: Maybe<family_author>;
  delete_family_author?: Maybe<Scalars['Boolean']>;
  insert_family_literature_reference?: Maybe<family_literature_reference>;
  update_family_literature_reference?: Maybe<family_literature_reference>;
  delete_family_literature_reference?: Maybe<Scalars['Boolean']>;
  insert_family_long?: Maybe<family_long>;
  update_family_long?: Maybe<family_long>;
  delete_family_long?: Maybe<Scalars['Boolean']>;
  insert_family_ncbi?: Maybe<family_ncbi>;
  update_family_ncbi?: Maybe<family_ncbi>;
  delete_family_ncbi?: Maybe<Scalars['Boolean']>;
  insert_features?: Maybe<features>;
  update_features?: Maybe<features>;
  delete_features?: Maybe<Scalars['Boolean']>;
  insert_full_region?: Maybe<full_region>;
  update_full_region?: Maybe<full_region>;
  delete_full_region?: Maybe<Scalars['Boolean']>;
  insert_genome?: Maybe<genome>;
  update_genome?: Maybe<genome>;
  delete_genome?: Maybe<Scalars['Boolean']>;
  insert_genome_temp?: Maybe<genome_temp>;
  update_genome_temp?: Maybe<genome_temp>;
  delete_genome_temp?: Maybe<Scalars['Boolean']>;
  insert_genseq?: Maybe<genseq>;
  update_genseq?: Maybe<genseq>;
  delete_genseq?: Maybe<Scalars['Boolean']>;
  insert_genseq_temp?: Maybe<genseq_temp>;
  update_genseq_temp?: Maybe<genseq_temp>;
  delete_genseq_temp?: Maybe<Scalars['Boolean']>;
  insert_html_alignment?: Maybe<html_alignment>;
  update_html_alignment?: Maybe<html_alignment>;
  delete_html_alignment?: Maybe<Scalars['Boolean']>;
  insert_keywords?: Maybe<keywords>;
  update_keywords?: Maybe<keywords>;
  delete_keywords?: Maybe<Scalars['Boolean']>;
  insert_literature_reference?: Maybe<literature_reference>;
  update_literature_reference?: Maybe<literature_reference>;
  delete_literature_reference?: Maybe<Scalars['Boolean']>;
  insert_matches_and_fasta?: Maybe<matches_and_fasta>;
  update_matches_and_fasta?: Maybe<matches_and_fasta>;
  delete_matches_and_fasta?: Maybe<Scalars['Boolean']>;
  insert_motif?: Maybe<motif>;
  update_motif?: Maybe<motif>;
  delete_motif?: Maybe<Scalars['Boolean']>;
  insert_motif_database_link?: Maybe<motif_database_link>;
  update_motif_database_link?: Maybe<motif_database_link>;
  delete_motif_database_link?: Maybe<Scalars['Boolean']>;
  insert_motif_family_stats?: Maybe<motif_family_stats>;
  update_motif_family_stats?: Maybe<motif_family_stats>;
  delete_motif_family_stats?: Maybe<Scalars['Boolean']>;
  insert_motif_file?: Maybe<motif_file>;
  update_motif_file?: Maybe<motif_file>;
  delete_motif_file?: Maybe<Scalars['Boolean']>;
  insert_motif_literature?: Maybe<motif_literature>;
  update_motif_literature?: Maybe<motif_literature>;
  delete_motif_literature?: Maybe<Scalars['Boolean']>;
  insert_motif_matches?: Maybe<motif_matches>;
  update_motif_matches?: Maybe<motif_matches>;
  delete_motif_matches?: Maybe<Scalars['Boolean']>;
  insert_motif_old?: Maybe<motif_old>;
  update_motif_old?: Maybe<motif_old>;
  delete_motif_old?: Maybe<Scalars['Boolean']>;
  insert_motif_pdb?: Maybe<motif_pdb>;
  update_motif_pdb?: Maybe<motif_pdb>;
  delete_motif_pdb?: Maybe<Scalars['Boolean']>;
  insert_motif_ss_image?: Maybe<motif_ss_image>;
  update_motif_ss_image?: Maybe<motif_ss_image>;
  delete_motif_ss_image?: Maybe<Scalars['Boolean']>;
  insert_pdb?: Maybe<pdb>;
  update_pdb?: Maybe<pdb>;
  delete_pdb?: Maybe<Scalars['Boolean']>;
  insert_pdb_full_region?: Maybe<pdb_full_region>;
  update_pdb_full_region?: Maybe<pdb_full_region>;
  delete_pdb_full_region?: Maybe<Scalars['Boolean']>;
  insert_pdb_full_region_old?: Maybe<pdb_full_region_old>;
  update_pdb_full_region_old?: Maybe<pdb_full_region_old>;
  delete_pdb_full_region_old?: Maybe<Scalars['Boolean']>;
  insert_pdb_rfam_reg?: Maybe<pdb_rfam_reg>;
  update_pdb_rfam_reg?: Maybe<pdb_rfam_reg>;
  delete_pdb_rfam_reg?: Maybe<Scalars['Boolean']>;
  insert_pdb_sequence?: Maybe<pdb_sequence>;
  update_pdb_sequence?: Maybe<pdb_sequence>;
  delete_pdb_sequence?: Maybe<Scalars['Boolean']>;
  insert_processed_data?: Maybe<processed_data>;
  update_processed_data?: Maybe<processed_data>;
  delete_processed_data?: Maybe<Scalars['Boolean']>;
  insert_pseudoknot?: Maybe<pseudoknot>;
  update_pseudoknot?: Maybe<pseudoknot>;
  delete_pseudoknot?: Maybe<Scalars['Boolean']>;
  insert_refseq?: Maybe<refseq>;
  update_refseq?: Maybe<refseq>;
  delete_refseq?: Maybe<Scalars['Boolean']>;
  insert_refseq_full_region?: Maybe<refseq_full_region>;
  update_refseq_full_region?: Maybe<refseq_full_region>;
  delete_refseq_full_region?: Maybe<Scalars['Boolean']>;
  insert_rfamseq?: Maybe<rfamseq>;
  update_rfamseq?: Maybe<rfamseq>;
  delete_rfamseq?: Maybe<Scalars['Boolean']>;
  insert_rfamseq_temp?: Maybe<rfamseq_temp>;
  update_rfamseq_temp?: Maybe<rfamseq_temp>;
  delete_rfamseq_temp?: Maybe<Scalars['Boolean']>;
  insert_rnacentral_matches?: Maybe<rnacentral_matches>;
  update_rnacentral_matches?: Maybe<rnacentral_matches>;
  delete_rnacentral_matches?: Maybe<Scalars['Boolean']>;
  insert_rscape_annotations?: Maybe<rscape_annotations>;
  update_rscape_annotations?: Maybe<rscape_annotations>;
  delete_rscape_annotations?: Maybe<Scalars['Boolean']>;
  insert_secondary_structure_image?: Maybe<secondary_structure_image>;
  update_secondary_structure_image?: Maybe<secondary_structure_image>;
  delete_secondary_structure_image?: Maybe<Scalars['Boolean']>;
  insert_seed_region?: Maybe<seed_region>;
  update_seed_region?: Maybe<seed_region>;
  delete_seed_region?: Maybe<Scalars['Boolean']>;
  insert_sunburst?: Maybe<sunburst>;
  update_sunburst?: Maybe<sunburst>;
  delete_sunburst?: Maybe<Scalars['Boolean']>;
  insert_taxonomic_tree?: Maybe<taxonomic_tree>;
  update_taxonomic_tree?: Maybe<taxonomic_tree>;
  delete_taxonomic_tree?: Maybe<Scalars['Boolean']>;
  insert_taxonomy?: Maybe<taxonomy>;
  update_taxonomy?: Maybe<taxonomy>;
  delete_taxonomy?: Maybe<Scalars['Boolean']>;
  insert_taxonomy_websearch?: Maybe<taxonomy_websearch>;
  update_taxonomy_websearch?: Maybe<taxonomy_websearch>;
  delete_taxonomy_websearch?: Maybe<Scalars['Boolean']>;
  insert_version?: Maybe<version>;
  update_version?: Maybe<version>;
  delete_version?: Maybe<Scalars['Boolean']>;
  insert_wikitext?: Maybe<wikitext>;
  update_wikitext?: Maybe<wikitext>;
  delete_wikitext?: Maybe<Scalars['Boolean']>;
};


export type Mutationinsert__annotated_fileArgs = {
  _annotated_file: _annotated_file_InsertInput;
};


export type Mutationupdate__annotated_fileArgs = {
  _annotated_file: _annotated_file_UpdateInput;
  where?: InputMaybe<_annotated_file_WhereInput>;
};


export type Mutationdelete__annotated_fileArgs = {
  where?: InputMaybe<_annotated_file_WhereInput>;
};


export type Mutationinsert__family_fileArgs = {
  _family_file: _family_file_InsertInput;
};


export type Mutationupdate__family_fileArgs = {
  _family_file: _family_file_UpdateInput;
  where?: InputMaybe<_family_file_WhereInput>;
};


export type Mutationdelete__family_fileArgs = {
  where?: InputMaybe<_family_file_WhereInput>;
};


export type Mutationinsert__genome_dataArgs = {
  _genome_data: _genome_data_InsertInput;
};


export type Mutationupdate__genome_dataArgs = {
  _genome_data: _genome_data_UpdateInput;
  where?: InputMaybe<_genome_data_WhereInput>;
};


export type Mutationdelete__genome_dataArgs = {
  where?: InputMaybe<_genome_data_WhereInput>;
};


export type Mutationinsert__lockArgs = {
  _lock: _lock_InsertInput;
};


export type Mutationupdate__lockArgs = {
  _lock: _lock_UpdateInput;
  where?: InputMaybe<_lock_WhereInput>;
};


export type Mutationdelete__lockArgs = {
  where?: InputMaybe<_lock_WhereInput>;
};


export type Mutationinsert__overlapArgs = {
  _overlap: _overlap_InsertInput;
};


export type Mutationupdate__overlapArgs = {
  _overlap: _overlap_UpdateInput;
  where?: InputMaybe<_overlap_WhereInput>;
};


export type Mutationdelete__overlapArgs = {
  where?: InputMaybe<_overlap_WhereInput>;
};


export type Mutationinsert__overlap_membershipArgs = {
  _overlap_membership: _overlap_membership_InsertInput;
};


export type Mutationupdate__overlap_membershipArgs = {
  _overlap_membership: _overlap_membership_UpdateInput;
  where?: InputMaybe<_overlap_membership_WhereInput>;
};


export type Mutationdelete__overlap_membershipArgs = {
  where?: InputMaybe<_overlap_membership_WhereInput>;
};


export type Mutationinsert__post_processArgs = {
  _post_process: _post_process_InsertInput;
};


export type Mutationupdate__post_processArgs = {
  _post_process: _post_process_UpdateInput;
  where?: InputMaybe<_post_process_WhereInput>;
};


export type Mutationdelete__post_processArgs = {
  where?: InputMaybe<_post_process_WhereInput>;
};


export type Mutationinsert_alignment_and_treeArgs = {
  alignment_and_tree: alignment_and_tree_InsertInput;
};


export type Mutationupdate_alignment_and_treeArgs = {
  alignment_and_tree: alignment_and_tree_UpdateInput;
  where?: InputMaybe<alignment_and_tree_WhereInput>;
};


export type Mutationdelete_alignment_and_treeArgs = {
  where?: InputMaybe<alignment_and_tree_WhereInput>;
};


export type Mutationinsert_authorArgs = {
  author: author_InsertInput;
};


export type Mutationupdate_authorArgs = {
  author: author_UpdateInput;
  where?: InputMaybe<author_WhereInput>;
};


export type Mutationdelete_authorArgs = {
  where?: InputMaybe<author_WhereInput>;
};


export type Mutationinsert_clanArgs = {
  clan: clan_InsertInput;
};


export type Mutationupdate_clanArgs = {
  clan: clan_UpdateInput;
  where?: InputMaybe<clan_WhereInput>;
};


export type Mutationdelete_clanArgs = {
  where?: InputMaybe<clan_WhereInput>;
};


export type Mutationinsert_clan_database_linkArgs = {
  clan_database_link: clan_database_link_InsertInput;
};


export type Mutationupdate_clan_database_linkArgs = {
  clan_database_link: clan_database_link_UpdateInput;
  where?: InputMaybe<clan_database_link_WhereInput>;
};


export type Mutationdelete_clan_database_linkArgs = {
  where?: InputMaybe<clan_database_link_WhereInput>;
};


export type Mutationinsert_clan_literature_referenceArgs = {
  clan_literature_reference: clan_literature_reference_InsertInput;
};


export type Mutationupdate_clan_literature_referenceArgs = {
  clan_literature_reference: clan_literature_reference_UpdateInput;
  where?: InputMaybe<clan_literature_reference_WhereInput>;
};


export type Mutationdelete_clan_literature_referenceArgs = {
  where?: InputMaybe<clan_literature_reference_WhereInput>;
};


export type Mutationinsert_clan_membershipArgs = {
  clan_membership: clan_membership_InsertInput;
};


export type Mutationupdate_clan_membershipArgs = {
  clan_membership: clan_membership_UpdateInput;
  where?: InputMaybe<clan_membership_WhereInput>;
};


export type Mutationdelete_clan_membershipArgs = {
  where?: InputMaybe<clan_membership_WhereInput>;
};


export type Mutationinsert_database_linkArgs = {
  database_link: database_link_InsertInput;
};


export type Mutationupdate_database_linkArgs = {
  database_link: database_link_UpdateInput;
  where?: InputMaybe<database_link_WhereInput>;
};


export type Mutationdelete_database_linkArgs = {
  where?: InputMaybe<database_link_WhereInput>;
};


export type Mutationinsert_db_versionArgs = {
  db_version: db_version_InsertInput;
};


export type Mutationupdate_db_versionArgs = {
  db_version: db_version_UpdateInput;
  where?: InputMaybe<db_version_WhereInput>;
};


export type Mutationdelete_db_versionArgs = {
  where?: InputMaybe<db_version_WhereInput>;
};


export type Mutationinsert_dead_clanArgs = {
  dead_clan: dead_clan_InsertInput;
};


export type Mutationupdate_dead_clanArgs = {
  dead_clan: dead_clan_UpdateInput;
  where?: InputMaybe<dead_clan_WhereInput>;
};


export type Mutationdelete_dead_clanArgs = {
  where?: InputMaybe<dead_clan_WhereInput>;
};


export type Mutationinsert_dead_familyArgs = {
  dead_family: dead_family_InsertInput;
};


export type Mutationupdate_dead_familyArgs = {
  dead_family: dead_family_UpdateInput;
  where?: InputMaybe<dead_family_WhereInput>;
};


export type Mutationdelete_dead_familyArgs = {
  where?: InputMaybe<dead_family_WhereInput>;
};


export type Mutationinsert_ensembl_namesArgs = {
  ensembl_names: ensembl_names_InsertInput;
};


export type Mutationupdate_ensembl_namesArgs = {
  ensembl_names: ensembl_names_UpdateInput;
  where?: InputMaybe<ensembl_names_WhereInput>;
};


export type Mutationdelete_ensembl_namesArgs = {
  where?: InputMaybe<ensembl_names_WhereInput>;
};


export type Mutationinsert_familyArgs = {
  family: family_InsertInput;
};


export type Mutationupdate_familyArgs = {
  family: family_UpdateInput;
  where?: InputMaybe<family_WhereInput>;
};


export type Mutationdelete_familyArgs = {
  where?: InputMaybe<family_WhereInput>;
};


export type Mutationinsert_family_authorArgs = {
  family_author: family_author_InsertInput;
};


export type Mutationupdate_family_authorArgs = {
  family_author: family_author_UpdateInput;
  where?: InputMaybe<family_author_WhereInput>;
};


export type Mutationdelete_family_authorArgs = {
  where?: InputMaybe<family_author_WhereInput>;
};


export type Mutationinsert_family_literature_referenceArgs = {
  family_literature_reference: family_literature_reference_InsertInput;
};


export type Mutationupdate_family_literature_referenceArgs = {
  family_literature_reference: family_literature_reference_UpdateInput;
  where?: InputMaybe<family_literature_reference_WhereInput>;
};


export type Mutationdelete_family_literature_referenceArgs = {
  where?: InputMaybe<family_literature_reference_WhereInput>;
};


export type Mutationinsert_family_longArgs = {
  family_long: family_long_InsertInput;
};


export type Mutationupdate_family_longArgs = {
  family_long: family_long_UpdateInput;
  where?: InputMaybe<family_long_WhereInput>;
};


export type Mutationdelete_family_longArgs = {
  where?: InputMaybe<family_long_WhereInput>;
};


export type Mutationinsert_family_ncbiArgs = {
  family_ncbi: family_ncbi_InsertInput;
};


export type Mutationupdate_family_ncbiArgs = {
  family_ncbi: family_ncbi_UpdateInput;
  where?: InputMaybe<family_ncbi_WhereInput>;
};


export type Mutationdelete_family_ncbiArgs = {
  where?: InputMaybe<family_ncbi_WhereInput>;
};


export type Mutationinsert_featuresArgs = {
  features: features_InsertInput;
};


export type Mutationupdate_featuresArgs = {
  features: features_UpdateInput;
  where?: InputMaybe<features_WhereInput>;
};


export type Mutationdelete_featuresArgs = {
  where?: InputMaybe<features_WhereInput>;
};


export type Mutationinsert_full_regionArgs = {
  full_region: full_region_InsertInput;
};


export type Mutationupdate_full_regionArgs = {
  full_region: full_region_UpdateInput;
  where?: InputMaybe<full_region_WhereInput>;
};


export type Mutationdelete_full_regionArgs = {
  where?: InputMaybe<full_region_WhereInput>;
};


export type Mutationinsert_genomeArgs = {
  genome: genome_InsertInput;
};


export type Mutationupdate_genomeArgs = {
  genome: genome_UpdateInput;
  where?: InputMaybe<genome_WhereInput>;
};


export type Mutationdelete_genomeArgs = {
  where?: InputMaybe<genome_WhereInput>;
};


export type Mutationinsert_genome_tempArgs = {
  genome_temp: genome_temp_InsertInput;
};


export type Mutationupdate_genome_tempArgs = {
  genome_temp: genome_temp_UpdateInput;
  where?: InputMaybe<genome_temp_WhereInput>;
};


export type Mutationdelete_genome_tempArgs = {
  where?: InputMaybe<genome_temp_WhereInput>;
};


export type Mutationinsert_genseqArgs = {
  genseq: genseq_InsertInput;
};


export type Mutationupdate_genseqArgs = {
  genseq: genseq_UpdateInput;
  where?: InputMaybe<genseq_WhereInput>;
};


export type Mutationdelete_genseqArgs = {
  where?: InputMaybe<genseq_WhereInput>;
};


export type Mutationinsert_genseq_tempArgs = {
  genseq_temp: genseq_temp_InsertInput;
};


export type Mutationupdate_genseq_tempArgs = {
  genseq_temp: genseq_temp_UpdateInput;
  where?: InputMaybe<genseq_temp_WhereInput>;
};


export type Mutationdelete_genseq_tempArgs = {
  where?: InputMaybe<genseq_temp_WhereInput>;
};


export type Mutationinsert_html_alignmentArgs = {
  html_alignment: html_alignment_InsertInput;
};


export type Mutationupdate_html_alignmentArgs = {
  html_alignment: html_alignment_UpdateInput;
  where?: InputMaybe<html_alignment_WhereInput>;
};


export type Mutationdelete_html_alignmentArgs = {
  where?: InputMaybe<html_alignment_WhereInput>;
};


export type Mutationinsert_keywordsArgs = {
  keywords: keywords_InsertInput;
};


export type Mutationupdate_keywordsArgs = {
  keywords: keywords_UpdateInput;
  where?: InputMaybe<keywords_WhereInput>;
};


export type Mutationdelete_keywordsArgs = {
  where?: InputMaybe<keywords_WhereInput>;
};


export type Mutationinsert_literature_referenceArgs = {
  literature_reference: literature_reference_InsertInput;
};


export type Mutationupdate_literature_referenceArgs = {
  literature_reference: literature_reference_UpdateInput;
  where?: InputMaybe<literature_reference_WhereInput>;
};


export type Mutationdelete_literature_referenceArgs = {
  where?: InputMaybe<literature_reference_WhereInput>;
};


export type Mutationinsert_matches_and_fastaArgs = {
  matches_and_fasta: matches_and_fasta_InsertInput;
};


export type Mutationupdate_matches_and_fastaArgs = {
  matches_and_fasta: matches_and_fasta_UpdateInput;
  where?: InputMaybe<matches_and_fasta_WhereInput>;
};


export type Mutationdelete_matches_and_fastaArgs = {
  where?: InputMaybe<matches_and_fasta_WhereInput>;
};


export type Mutationinsert_motifArgs = {
  motif: motif_InsertInput;
};


export type Mutationupdate_motifArgs = {
  motif: motif_UpdateInput;
  where?: InputMaybe<motif_WhereInput>;
};


export type Mutationdelete_motifArgs = {
  where?: InputMaybe<motif_WhereInput>;
};


export type Mutationinsert_motif_database_linkArgs = {
  motif_database_link: motif_database_link_InsertInput;
};


export type Mutationupdate_motif_database_linkArgs = {
  motif_database_link: motif_database_link_UpdateInput;
  where?: InputMaybe<motif_database_link_WhereInput>;
};


export type Mutationdelete_motif_database_linkArgs = {
  where?: InputMaybe<motif_database_link_WhereInput>;
};


export type Mutationinsert_motif_family_statsArgs = {
  motif_family_stats: motif_family_stats_InsertInput;
};


export type Mutationupdate_motif_family_statsArgs = {
  motif_family_stats: motif_family_stats_UpdateInput;
  where?: InputMaybe<motif_family_stats_WhereInput>;
};


export type Mutationdelete_motif_family_statsArgs = {
  where?: InputMaybe<motif_family_stats_WhereInput>;
};


export type Mutationinsert_motif_fileArgs = {
  motif_file: motif_file_InsertInput;
};


export type Mutationupdate_motif_fileArgs = {
  motif_file: motif_file_UpdateInput;
  where?: InputMaybe<motif_file_WhereInput>;
};


export type Mutationdelete_motif_fileArgs = {
  where?: InputMaybe<motif_file_WhereInput>;
};


export type Mutationinsert_motif_literatureArgs = {
  motif_literature: motif_literature_InsertInput;
};


export type Mutationupdate_motif_literatureArgs = {
  motif_literature: motif_literature_UpdateInput;
  where?: InputMaybe<motif_literature_WhereInput>;
};


export type Mutationdelete_motif_literatureArgs = {
  where?: InputMaybe<motif_literature_WhereInput>;
};


export type Mutationinsert_motif_matchesArgs = {
  motif_matches: motif_matches_InsertInput;
};


export type Mutationupdate_motif_matchesArgs = {
  motif_matches: motif_matches_UpdateInput;
  where?: InputMaybe<motif_matches_WhereInput>;
};


export type Mutationdelete_motif_matchesArgs = {
  where?: InputMaybe<motif_matches_WhereInput>;
};


export type Mutationinsert_motif_oldArgs = {
  motif_old: motif_old_InsertInput;
};


export type Mutationupdate_motif_oldArgs = {
  motif_old: motif_old_UpdateInput;
  where?: InputMaybe<motif_old_WhereInput>;
};


export type Mutationdelete_motif_oldArgs = {
  where?: InputMaybe<motif_old_WhereInput>;
};


export type Mutationinsert_motif_pdbArgs = {
  motif_pdb: motif_pdb_InsertInput;
};


export type Mutationupdate_motif_pdbArgs = {
  motif_pdb: motif_pdb_UpdateInput;
  where?: InputMaybe<motif_pdb_WhereInput>;
};


export type Mutationdelete_motif_pdbArgs = {
  where?: InputMaybe<motif_pdb_WhereInput>;
};


export type Mutationinsert_motif_ss_imageArgs = {
  motif_ss_image: motif_ss_image_InsertInput;
};


export type Mutationupdate_motif_ss_imageArgs = {
  motif_ss_image: motif_ss_image_UpdateInput;
  where?: InputMaybe<motif_ss_image_WhereInput>;
};


export type Mutationdelete_motif_ss_imageArgs = {
  where?: InputMaybe<motif_ss_image_WhereInput>;
};


export type Mutationinsert_pdbArgs = {
  pdb: pdb_InsertInput;
};


export type Mutationupdate_pdbArgs = {
  pdb: pdb_UpdateInput;
  where?: InputMaybe<pdb_WhereInput>;
};


export type Mutationdelete_pdbArgs = {
  where?: InputMaybe<pdb_WhereInput>;
};


export type Mutationinsert_pdb_full_regionArgs = {
  pdb_full_region: pdb_full_region_InsertInput;
};


export type Mutationupdate_pdb_full_regionArgs = {
  pdb_full_region: pdb_full_region_UpdateInput;
  where?: InputMaybe<pdb_full_region_WhereInput>;
};


export type Mutationdelete_pdb_full_regionArgs = {
  where?: InputMaybe<pdb_full_region_WhereInput>;
};


export type Mutationinsert_pdb_full_region_oldArgs = {
  pdb_full_region_old: pdb_full_region_old_InsertInput;
};


export type Mutationupdate_pdb_full_region_oldArgs = {
  pdb_full_region_old: pdb_full_region_old_UpdateInput;
  where?: InputMaybe<pdb_full_region_old_WhereInput>;
};


export type Mutationdelete_pdb_full_region_oldArgs = {
  where?: InputMaybe<pdb_full_region_old_WhereInput>;
};


export type Mutationinsert_pdb_rfam_regArgs = {
  pdb_rfam_reg: pdb_rfam_reg_InsertInput;
};


export type Mutationupdate_pdb_rfam_regArgs = {
  pdb_rfam_reg: pdb_rfam_reg_UpdateInput;
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
};


export type Mutationdelete_pdb_rfam_regArgs = {
  where?: InputMaybe<pdb_rfam_reg_WhereInput>;
};


export type Mutationinsert_pdb_sequenceArgs = {
  pdb_sequence: pdb_sequence_InsertInput;
};


export type Mutationupdate_pdb_sequenceArgs = {
  pdb_sequence: pdb_sequence_UpdateInput;
  where?: InputMaybe<pdb_sequence_WhereInput>;
};


export type Mutationdelete_pdb_sequenceArgs = {
  where?: InputMaybe<pdb_sequence_WhereInput>;
};


export type Mutationinsert_processed_dataArgs = {
  processed_data: processed_data_InsertInput;
};


export type Mutationupdate_processed_dataArgs = {
  processed_data: processed_data_UpdateInput;
  where?: InputMaybe<processed_data_WhereInput>;
};


export type Mutationdelete_processed_dataArgs = {
  where?: InputMaybe<processed_data_WhereInput>;
};


export type Mutationinsert_pseudoknotArgs = {
  pseudoknot: pseudoknot_InsertInput;
};


export type Mutationupdate_pseudoknotArgs = {
  pseudoknot: pseudoknot_UpdateInput;
  where?: InputMaybe<pseudoknot_WhereInput>;
};


export type Mutationdelete_pseudoknotArgs = {
  where?: InputMaybe<pseudoknot_WhereInput>;
};


export type Mutationinsert_refseqArgs = {
  refseq: refseq_InsertInput;
};


export type Mutationupdate_refseqArgs = {
  refseq: refseq_UpdateInput;
  where?: InputMaybe<refseq_WhereInput>;
};


export type Mutationdelete_refseqArgs = {
  where?: InputMaybe<refseq_WhereInput>;
};


export type Mutationinsert_refseq_full_regionArgs = {
  refseq_full_region: refseq_full_region_InsertInput;
};


export type Mutationupdate_refseq_full_regionArgs = {
  refseq_full_region: refseq_full_region_UpdateInput;
  where?: InputMaybe<refseq_full_region_WhereInput>;
};


export type Mutationdelete_refseq_full_regionArgs = {
  where?: InputMaybe<refseq_full_region_WhereInput>;
};


export type Mutationinsert_rfamseqArgs = {
  rfamseq: rfamseq_InsertInput;
};


export type Mutationupdate_rfamseqArgs = {
  rfamseq: rfamseq_UpdateInput;
  where?: InputMaybe<rfamseq_WhereInput>;
};


export type Mutationdelete_rfamseqArgs = {
  where?: InputMaybe<rfamseq_WhereInput>;
};


export type Mutationinsert_rfamseq_tempArgs = {
  rfamseq_temp: rfamseq_temp_InsertInput;
};


export type Mutationupdate_rfamseq_tempArgs = {
  rfamseq_temp: rfamseq_temp_UpdateInput;
  where?: InputMaybe<rfamseq_temp_WhereInput>;
};


export type Mutationdelete_rfamseq_tempArgs = {
  where?: InputMaybe<rfamseq_temp_WhereInput>;
};


export type Mutationinsert_rnacentral_matchesArgs = {
  rnacentral_matches: rnacentral_matches_InsertInput;
};


export type Mutationupdate_rnacentral_matchesArgs = {
  rnacentral_matches: rnacentral_matches_UpdateInput;
  where?: InputMaybe<rnacentral_matches_WhereInput>;
};


export type Mutationdelete_rnacentral_matchesArgs = {
  where?: InputMaybe<rnacentral_matches_WhereInput>;
};


export type Mutationinsert_rscape_annotationsArgs = {
  rscape_annotations: rscape_annotations_InsertInput;
};


export type Mutationupdate_rscape_annotationsArgs = {
  rscape_annotations: rscape_annotations_UpdateInput;
  where?: InputMaybe<rscape_annotations_WhereInput>;
};


export type Mutationdelete_rscape_annotationsArgs = {
  where?: InputMaybe<rscape_annotations_WhereInput>;
};


export type Mutationinsert_secondary_structure_imageArgs = {
  secondary_structure_image: secondary_structure_image_InsertInput;
};


export type Mutationupdate_secondary_structure_imageArgs = {
  secondary_structure_image: secondary_structure_image_UpdateInput;
  where?: InputMaybe<secondary_structure_image_WhereInput>;
};


export type Mutationdelete_secondary_structure_imageArgs = {
  where?: InputMaybe<secondary_structure_image_WhereInput>;
};


export type Mutationinsert_seed_regionArgs = {
  seed_region: seed_region_InsertInput;
};


export type Mutationupdate_seed_regionArgs = {
  seed_region: seed_region_UpdateInput;
  where?: InputMaybe<seed_region_WhereInput>;
};


export type Mutationdelete_seed_regionArgs = {
  where?: InputMaybe<seed_region_WhereInput>;
};


export type Mutationinsert_sunburstArgs = {
  sunburst: sunburst_InsertInput;
};


export type Mutationupdate_sunburstArgs = {
  sunburst: sunburst_UpdateInput;
  where?: InputMaybe<sunburst_WhereInput>;
};


export type Mutationdelete_sunburstArgs = {
  where?: InputMaybe<sunburst_WhereInput>;
};


export type Mutationinsert_taxonomic_treeArgs = {
  taxonomic_tree: taxonomic_tree_InsertInput;
};


export type Mutationupdate_taxonomic_treeArgs = {
  taxonomic_tree: taxonomic_tree_UpdateInput;
  where?: InputMaybe<taxonomic_tree_WhereInput>;
};


export type Mutationdelete_taxonomic_treeArgs = {
  where?: InputMaybe<taxonomic_tree_WhereInput>;
};


export type Mutationinsert_taxonomyArgs = {
  taxonomy: taxonomy_InsertInput;
};


export type Mutationupdate_taxonomyArgs = {
  taxonomy: taxonomy_UpdateInput;
  where?: InputMaybe<taxonomy_WhereInput>;
};


export type Mutationdelete_taxonomyArgs = {
  where?: InputMaybe<taxonomy_WhereInput>;
};


export type Mutationinsert_taxonomy_websearchArgs = {
  taxonomy_websearch: taxonomy_websearch_InsertInput;
};


export type Mutationupdate_taxonomy_websearchArgs = {
  taxonomy_websearch: taxonomy_websearch_UpdateInput;
  where?: InputMaybe<taxonomy_websearch_WhereInput>;
};


export type Mutationdelete_taxonomy_websearchArgs = {
  where?: InputMaybe<taxonomy_websearch_WhereInput>;
};


export type Mutationinsert_versionArgs = {
  version: version_InsertInput;
};


export type Mutationupdate_versionArgs = {
  version: version_UpdateInput;
  where?: InputMaybe<version_WhereInput>;
};


export type Mutationdelete_versionArgs = {
  where?: InputMaybe<version_WhereInput>;
};


export type Mutationinsert_wikitextArgs = {
  wikitext: wikitext_InsertInput;
};


export type Mutationupdate_wikitextArgs = {
  wikitext: wikitext_UpdateInput;
  where?: InputMaybe<wikitext_WhereInput>;
};


export type Mutationdelete_wikitextArgs = {
  where?: InputMaybe<wikitext_WhereInput>;
};

export type _annotated_file_InsertInput = {
  rfam_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
  full?: InputMaybe<Scalars['String']>;
};

export type _annotated_file_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
  full?: InputMaybe<Scalars['String']>;
};

export type _family_file_InsertInput = {
  rfam_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
};

export type _family_file_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
};

export type _genome_data_InsertInput = {
  data_file: Scalars['String'];
  author: Scalars['String'];
  uuid: Scalars['String'];
  status: _genome_data_status;
  created: Scalars['DateTime'];
  opened?: InputMaybe<Scalars['DateTime']>;
  closed?: InputMaybe<Scalars['DateTime']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['Int']>;
};

export type _genome_data_UpdateInput = {
  data_file?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<_genome_data_status>;
  created?: InputMaybe<Scalars['DateTime']>;
  opened?: InputMaybe<Scalars['DateTime']>;
  closed?: InputMaybe<Scalars['DateTime']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['Int']>;
};

export type _lock_InsertInput = {
  locked: Scalars['Int'];
  locker: Scalars['String'];
  /** Do you lock individual families? Do ever lock the whole database? */
  allowCommits: Scalars['Int'];
  alsoAllow?: InputMaybe<Scalars['String']>;
};

export type _lock_UpdateInput = {
  locked?: InputMaybe<Scalars['Int']>;
  locker?: InputMaybe<Scalars['String']>;
  /** Do you lock individual families? Do ever lock the whole database? */
  allowCommits?: InputMaybe<Scalars['Int']>;
  alsoAllow?: InputMaybe<Scalars['String']>;
};

export type _overlap_InsertInput = {
  auto_overlap: Scalars['Int'];
  id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type _overlap_UpdateInput = {
  auto_overlap?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
};

export type _overlap_membership_InsertInput = {
  rfam_acc: Scalars['String'];
  auto_overlap: Scalars['Int'];
};

export type _overlap_membership_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  auto_overlap?: InputMaybe<Scalars['Int']>;
};

export type _post_process_InsertInput = {
  rfam_acc: Scalars['String'];
  author: Scalars['String'];
  uuid: Scalars['String'];
  status: _post_process_status;
  created: Scalars['DateTime'];
  opened?: InputMaybe<Scalars['DateTime']>;
  closed?: InputMaybe<Scalars['DateTime']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['Int']>;
};

export type _post_process_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<_post_process_status>;
  created?: InputMaybe<Scalars['DateTime']>;
  opened?: InputMaybe<Scalars['DateTime']>;
  closed?: InputMaybe<Scalars['DateTime']>;
  message?: InputMaybe<Scalars['String']>;
  lsf_id?: InputMaybe<Scalars['Int']>;
};

export type alignment_and_tree_InsertInput = {
  rfam_acc: Scalars['String'];
  type: alignment_and_tree_type;
  alignment?: InputMaybe<Scalars['String']>;
  tree?: InputMaybe<Scalars['String']>;
  treemethod?: InputMaybe<Scalars['String']>;
  average_length?: InputMaybe<Scalars['Float']>;
  percent_id?: InputMaybe<Scalars['Float']>;
  number_of_sequences?: InputMaybe<Scalars['BigInt']>;
};

export type alignment_and_tree_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<alignment_and_tree_type>;
  alignment?: InputMaybe<Scalars['String']>;
  tree?: InputMaybe<Scalars['String']>;
  treemethod?: InputMaybe<Scalars['String']>;
  average_length?: InputMaybe<Scalars['Float']>;
  percent_id?: InputMaybe<Scalars['Float']>;
  number_of_sequences?: InputMaybe<Scalars['BigInt']>;
};

export type author_InsertInput = {
  author_id: Scalars['Int'];
  name: Scalars['String'];
  last_name?: InputMaybe<Scalars['String']>;
  initials?: InputMaybe<Scalars['String']>;
  orcid?: InputMaybe<Scalars['String']>;
  synonyms?: InputMaybe<Scalars['String']>;
};

export type author_UpdateInput = {
  author_id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  initials?: InputMaybe<Scalars['String']>;
  orcid?: InputMaybe<Scalars['String']>;
  synonyms?: InputMaybe<Scalars['String']>;
};

export type clan_InsertInput = {
  clan_acc: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type clan_UpdateInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type clan_database_link_InsertInput = {
  clan_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: InputMaybe<Scalars['String']>;
};

export type clan_database_link_UpdateInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type clan_literature_reference_InsertInput = {
  clan_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type clan_literature_reference_UpdateInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type clan_membership_InsertInput = {
  clan_acc: Scalars['String'];
  rfam_acc: Scalars['String'];
};

export type clan_membership_UpdateInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
};

export type database_link_InsertInput = {
  rfam_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: InputMaybe<Scalars['String']>;
};

export type database_link_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type db_version_InsertInput = {
  rfam_release: Scalars['Float'];
  rfam_release_date: Scalars['DateTime'];
  number_families: Scalars['Int'];
  embl_release: Scalars['String'];
  genome_collection_date?: InputMaybe<Scalars['DateTime']>;
  refseq_version?: InputMaybe<Scalars['Int']>;
  pdb_date?: InputMaybe<Scalars['DateTime']>;
  infernal_version?: InputMaybe<Scalars['String']>;
};

export type db_version_UpdateInput = {
  rfam_release?: InputMaybe<Scalars['Float']>;
  rfam_release_date?: InputMaybe<Scalars['DateTime']>;
  number_families?: InputMaybe<Scalars['Int']>;
  embl_release?: InputMaybe<Scalars['String']>;
  genome_collection_date?: InputMaybe<Scalars['DateTime']>;
  refseq_version?: InputMaybe<Scalars['Int']>;
  pdb_date?: InputMaybe<Scalars['DateTime']>;
  infernal_version?: InputMaybe<Scalars['String']>;
};

export type dead_clan_InsertInput = {
  clan_acc: Scalars['String'];
  /** Added. Add author? */
  clan_id: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type dead_clan_UpdateInput = {
  clan_acc?: InputMaybe<Scalars['String']>;
  /** Added. Add author? */
  clan_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type dead_family_InsertInput = {
  /** record the author??? */
  rfam_acc: Scalars['String'];
  rfam_id: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  /**
   * wikipedia page title
   *
   */
  title?: InputMaybe<Scalars['String']>;
  user: Scalars['String'];
};

export type dead_family_UpdateInput = {
  /** record the author??? */
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  forward_to?: InputMaybe<Scalars['String']>;
  /**
   * wikipedia page title
   *
   */
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ensembl_names_InsertInput = {
  insdc: Scalars['String'];
  ensembl?: InputMaybe<Scalars['String']>;
};

export type ensembl_names_UpdateInput = {
  insdc?: InputMaybe<Scalars['String']>;
  ensembl?: InputMaybe<Scalars['String']>;
};

export type family_InsertInput = {
  rfam_acc: Scalars['String'];
  rfam_id: Scalars['String'];
  auto_wiki: Scalars['Int'];
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  comment?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  cmsearch?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['BigInt']>;
  num_full?: InputMaybe<Scalars['BigInt']>;
  num_genome_seq?: InputMaybe<Scalars['BigInt']>;
  num_refseq?: InputMaybe<Scalars['BigInt']>;
  type?: InputMaybe<Scalars['String']>;
  structure_source?: InputMaybe<Scalars['String']>;
  number_of_species?: InputMaybe<Scalars['BigInt']>;
  number_3d_structures?: InputMaybe<Scalars['Int']>;
  num_pseudonokts?: InputMaybe<Scalars['Int']>;
  tax_seed?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type family_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  auto_wiki?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  comment?: InputMaybe<Scalars['String']>;
  previous_id?: InputMaybe<Scalars['String']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  cmsearch?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['BigInt']>;
  num_full?: InputMaybe<Scalars['BigInt']>;
  num_genome_seq?: InputMaybe<Scalars['BigInt']>;
  num_refseq?: InputMaybe<Scalars['BigInt']>;
  type?: InputMaybe<Scalars['String']>;
  structure_source?: InputMaybe<Scalars['String']>;
  number_of_species?: InputMaybe<Scalars['BigInt']>;
  number_3d_structures?: InputMaybe<Scalars['Int']>;
  num_pseudonokts?: InputMaybe<Scalars['Int']>;
  tax_seed?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type family_author_InsertInput = {
  rfam_acc: Scalars['String'];
  author_id: Scalars['Int'];
  desc_order: Scalars['Int'];
};

export type family_author_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  author_id?: InputMaybe<Scalars['Int']>;
  desc_order?: InputMaybe<Scalars['Int']>;
};

export type family_literature_reference_InsertInput = {
  rfam_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type family_literature_reference_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type family_long_InsertInput = {
  rfam_acc: Scalars['String'];
  referenece_structure?: InputMaybe<Scalars['String']>;
  reference_sequence?: InputMaybe<Scalars['String']>;
};

export type family_long_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  referenece_structure?: InputMaybe<Scalars['String']>;
  reference_sequence?: InputMaybe<Scalars['String']>;
};

export type family_ncbi_InsertInput = {
  ncbi_id: Scalars['Int'];
  /** Is this really needed? */
  rfam_id?: InputMaybe<Scalars['String']>;
  rfam_acc: Scalars['String'];
};

export type family_ncbi_UpdateInput = {
  ncbi_id?: InputMaybe<Scalars['Int']>;
  /** Is this really needed? */
  rfam_id?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
};

export type features_InsertInput = {
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  database_id: Scalars['String'];
  primary_id: Scalars['String'];
  secondary_id?: InputMaybe<Scalars['String']>;
  feat_orient: Scalars['Int'];
  feat_start: Scalars['BigInt'];
  feat_end: Scalars['BigInt'];
  quaternary_id?: InputMaybe<Scalars['String']>;
};

export type features_UpdateInput = {
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  database_id?: InputMaybe<Scalars['String']>;
  primary_id?: InputMaybe<Scalars['String']>;
  secondary_id?: InputMaybe<Scalars['String']>;
  feat_orient?: InputMaybe<Scalars['Int']>;
  feat_start?: InputMaybe<Scalars['BigInt']>;
  feat_end?: InputMaybe<Scalars['BigInt']>;
  quaternary_id?: InputMaybe<Scalars['String']>;
};

export type full_region_InsertInput = {
  rfam_acc: Scalars['String'];
  rfamseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  /** 99999.99 is the approx limit from Infernal. */
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  truncated: full_region_truncated;
  type: full_region_type;
  is_significant: Scalars['Int'];
};

export type full_region_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<Scalars['Float']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['Int']>;
  cm_end?: InputMaybe<Scalars['Int']>;
  truncated?: InputMaybe<full_region_truncated>;
  type?: InputMaybe<full_region_type>;
  is_significant?: InputMaybe<Scalars['Int']>;
};

export type genome_InsertInput = {
  /** This should be  */
  upid: Scalars['String'];
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['Int']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['Int']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<genome_assembly_level>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['BigInt']>;
  ungapped_length?: InputMaybe<Scalars['BigInt']>;
  circular?: InputMaybe<Scalars['Int']>;
  ncbi_id: Scalars['Int'];
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['Int']>;
  num_families?: InputMaybe<Scalars['Int']>;
  is_reference: Scalars['Int'];
  is_representative: Scalars['Int'];
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type genome_UpdateInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['Int']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['Int']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<genome_assembly_level>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['BigInt']>;
  ungapped_length?: InputMaybe<Scalars['BigInt']>;
  circular?: InputMaybe<Scalars['Int']>;
  ncbi_id?: InputMaybe<Scalars['Int']>;
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['Int']>;
  num_families?: InputMaybe<Scalars['Int']>;
  is_reference?: InputMaybe<Scalars['Int']>;
  is_representative?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type genome_temp_InsertInput = {
  /** This should be  */
  upid: Scalars['String'];
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['Int']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['Int']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<genome_temp_assembly_level>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['BigInt']>;
  ungapped_length?: InputMaybe<Scalars['BigInt']>;
  circular?: InputMaybe<Scalars['Int']>;
  ncbi_id: Scalars['Int'];
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['Int']>;
  num_families?: InputMaybe<Scalars['Int']>;
  is_reference: Scalars['Int'];
  is_representative: Scalars['Int'];
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type genome_temp_UpdateInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  assembly_acc?: InputMaybe<Scalars['String']>;
  assembly_version?: InputMaybe<Scalars['Int']>;
  wgs_acc?: InputMaybe<Scalars['String']>;
  wgs_version?: InputMaybe<Scalars['Int']>;
  assembly_name?: InputMaybe<Scalars['String']>;
  assembly_level?: InputMaybe<genome_temp_assembly_level>;
  study_ref?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  total_length?: InputMaybe<Scalars['BigInt']>;
  ungapped_length?: InputMaybe<Scalars['BigInt']>;
  circular?: InputMaybe<Scalars['Int']>;
  ncbi_id?: InputMaybe<Scalars['Int']>;
  scientific_name?: InputMaybe<Scalars['String']>;
  common_name?: InputMaybe<Scalars['String']>;
  kingdom?: InputMaybe<Scalars['String']>;
  num_rfam_regions?: InputMaybe<Scalars['Int']>;
  num_families?: InputMaybe<Scalars['Int']>;
  is_reference?: InputMaybe<Scalars['Int']>;
  is_representative?: InputMaybe<Scalars['Int']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type genseq_InsertInput = {
  /** This should be  */
  upid: Scalars['String'];
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type genseq_UpdateInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type genseq_temp_InsertInput = {
  /** This should be  */
  upid: Scalars['String'];
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type genseq_temp_UpdateInput = {
  /** This should be  */
  upid?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  chromosome_name?: InputMaybe<Scalars['String']>;
  chromosome_type?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type html_alignment_InsertInput = {
  rfam_acc: Scalars['String'];
  type: html_alignment_type;
  html?: InputMaybe<Scalars['String']>;
  block: Scalars['Int'];
  html_alignmentscol?: InputMaybe<Scalars['String']>;
};

export type html_alignment_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<html_alignment_type>;
  html?: InputMaybe<Scalars['String']>;
  block?: InputMaybe<Scalars['Int']>;
  html_alignmentscol?: InputMaybe<Scalars['String']>;
};

export type keywords_InsertInput = {
  rfam_acc: Scalars['String'];
  rfam_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  rfam_general?: InputMaybe<Scalars['String']>;
  literature?: InputMaybe<Scalars['String']>;
  wiki?: InputMaybe<Scalars['String']>;
  pdb_mappings?: InputMaybe<Scalars['String']>;
  clan_info?: InputMaybe<Scalars['String']>;
};

export type keywords_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfam_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  rfam_general?: InputMaybe<Scalars['String']>;
  literature?: InputMaybe<Scalars['String']>;
  wiki?: InputMaybe<Scalars['String']>;
  pdb_mappings?: InputMaybe<Scalars['String']>;
  clan_info?: InputMaybe<Scalars['String']>;
};

export type literature_reference_InsertInput = {
  pmid: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  journal?: InputMaybe<Scalars['String']>;
};

export type literature_reference_UpdateInput = {
  pmid?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  journal?: InputMaybe<Scalars['String']>;
};

export type matches_and_fasta_InsertInput = {
  rfam_acc: Scalars['String'];
  match_list?: InputMaybe<Scalars['String']>;
  fasta?: InputMaybe<Scalars['String']>;
  type: matches_and_fasta_type;
};

export type matches_and_fasta_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  match_list?: InputMaybe<Scalars['String']>;
  fasta?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<matches_and_fasta_type>;
};

export type motif_InsertInput = {
  motif_acc: Scalars['String'];
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['BigInt']>;
  average_id?: InputMaybe<Scalars['Float']>;
  average_sqlen?: InputMaybe<Scalars['Float']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  wiki?: InputMaybe<Scalars['String']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type motif_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  num_seed?: InputMaybe<Scalars['BigInt']>;
  average_id?: InputMaybe<Scalars['Float']>;
  average_sqlen?: InputMaybe<Scalars['Float']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  wiki?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type motif_database_link_InsertInput = {
  motif_acc: Scalars['String'];
  db_id: Scalars['String'];
  comment?: InputMaybe<Scalars['String']>;
  db_link: Scalars['String'];
  other_params?: InputMaybe<Scalars['String']>;
};

export type motif_database_link_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  db_id?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  db_link?: InputMaybe<Scalars['String']>;
  other_params?: InputMaybe<Scalars['String']>;
};

export type motif_family_stats_InsertInput = {
  rfam_acc: Scalars['String'];
  motif_acc: Scalars['String'];
  num_hits?: InputMaybe<Scalars['Int']>;
  frac_hits?: InputMaybe<Scalars['Float']>;
  sum_bits?: InputMaybe<Scalars['Float']>;
  avg_weight_bits?: InputMaybe<Scalars['Float']>;
};

export type motif_family_stats_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  motif_acc?: InputMaybe<Scalars['String']>;
  num_hits?: InputMaybe<Scalars['Int']>;
  frac_hits?: InputMaybe<Scalars['Float']>;
  sum_bits?: InputMaybe<Scalars['Float']>;
  avg_weight_bits?: InputMaybe<Scalars['Float']>;
};

export type motif_file_InsertInput = {
  motif_acc: Scalars['String'];
  seed: Scalars['String'];
  cm: Scalars['String'];
};

export type motif_file_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
};

export type motif_literature_InsertInput = {
  motif_acc: Scalars['String'];
  pmid: Scalars['Int'];
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type motif_literature_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  pmid?: InputMaybe<Scalars['Int']>;
  comment?: InputMaybe<Scalars['String']>;
  order_added?: InputMaybe<Scalars['Int']>;
};

export type motif_matches_InsertInput = {
  motif_acc: Scalars['String'];
  rfam_acc: Scalars['String'];
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  rfamseq_start?: InputMaybe<Scalars['BigInt']>;
  rfamseq_stop?: InputMaybe<Scalars['BigInt']>;
  query_start?: InputMaybe<Scalars['Int']>;
  query_stop?: InputMaybe<Scalars['Int']>;
  motif_start?: InputMaybe<Scalars['Int']>;
  motif_stop?: InputMaybe<Scalars['Int']>;
  e_value?: InputMaybe<Scalars['String']>;
  bit_score?: InputMaybe<Scalars['Float']>;
};

export type motif_matches_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  rfamseq_start?: InputMaybe<Scalars['BigInt']>;
  rfamseq_stop?: InputMaybe<Scalars['BigInt']>;
  query_start?: InputMaybe<Scalars['Int']>;
  query_stop?: InputMaybe<Scalars['Int']>;
  motif_start?: InputMaybe<Scalars['Int']>;
  motif_stop?: InputMaybe<Scalars['Int']>;
  e_value?: InputMaybe<Scalars['String']>;
  bit_score?: InputMaybe<Scalars['Float']>;
};

export type motif_old_InsertInput = {
  motif_acc: Scalars['String'];
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  created: Scalars['DateTime'];
  updated: Scalars['Timestamp'];
};

export type motif_old_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  motif_id?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  seed_source?: InputMaybe<Scalars['String']>;
  gathering_cutoff?: InputMaybe<Scalars['Float']>;
  trusted_cutoff?: InputMaybe<Scalars['Float']>;
  noise_cutoff?: InputMaybe<Scalars['Float']>;
  cmbuild?: InputMaybe<Scalars['String']>;
  cmcalibrate?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  ecmli_lambda?: InputMaybe<Scalars['Float']>;
  ecmli_mu?: InputMaybe<Scalars['Float']>;
  ecmli_cal_db?: InputMaybe<Scalars['Int']>;
  ecmli_cal_hits?: InputMaybe<Scalars['Int']>;
  maxl?: InputMaybe<Scalars['Int']>;
  clen?: InputMaybe<Scalars['Int']>;
  match_pair_node?: InputMaybe<Scalars['Int']>;
  hmm_tau?: InputMaybe<Scalars['Float']>;
  hmm_lambda?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['DateTime']>;
  updated?: InputMaybe<Scalars['Timestamp']>;
};

export type motif_pdb_InsertInput = {
  motif_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['Int']>;
  pdb_end?: InputMaybe<Scalars['Int']>;
};

export type motif_pdb_UpdateInput = {
  motif_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['Int']>;
  pdb_end?: InputMaybe<Scalars['Int']>;
};

export type motif_ss_image_InsertInput = {
  rfam_acc: Scalars['String'];
  motif_acc: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
};

export type motif_ss_image_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  motif_acc?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
};

export type pdb_InsertInput = {
  pdb_id: Scalars['String'];
  keywords?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  resolution?: InputMaybe<Scalars['Float']>;
  method?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
};

export type pdb_UpdateInput = {
  pdb_id?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  resolution?: InputMaybe<Scalars['Float']>;
  method?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
};

export type pdb_full_region_InsertInput = {
  rfam_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: InputMaybe<Scalars['String']>;
  pdb_start: Scalars['Int'];
  pdb_end: Scalars['Int'];
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant: Scalars['Int'];
};

export type pdb_full_region_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['Int']>;
  pdb_end?: InputMaybe<Scalars['Int']>;
  bit_score?: InputMaybe<Scalars['Float']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['Int']>;
  cm_end?: InputMaybe<Scalars['Int']>;
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant?: InputMaybe<Scalars['Int']>;
};

export type pdb_full_region_old_InsertInput = {
  rfam_acc: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: InputMaybe<Scalars['String']>;
  pdb_start: Scalars['Int'];
  pdb_end: Scalars['Int'];
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant: Scalars['Int'];
};

export type pdb_full_region_old_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_start?: InputMaybe<Scalars['Int']>;
  pdb_end?: InputMaybe<Scalars['Int']>;
  bit_score?: InputMaybe<Scalars['Float']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['Int']>;
  cm_end?: InputMaybe<Scalars['Int']>;
  hex_colour?: InputMaybe<Scalars['String']>;
  is_significant?: InputMaybe<Scalars['Int']>;
};

export type pdb_rfam_reg_InsertInput = {
  auto_pdb_reg: Scalars['Int'];
  rfam_acc: Scalars['String'];
  pdb_seq: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: InputMaybe<Scalars['String']>;
  pdb_res_start?: InputMaybe<Scalars['Int']>;
  pdb_res_end?: InputMaybe<Scalars['Int']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  hex_colour?: InputMaybe<Scalars['String']>;
};

export type pdb_rfam_reg_UpdateInput = {
  auto_pdb_reg?: InputMaybe<Scalars['Int']>;
  rfam_acc?: InputMaybe<Scalars['String']>;
  pdb_seq?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
  pdb_res_start?: InputMaybe<Scalars['Int']>;
  pdb_res_end?: InputMaybe<Scalars['Int']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  hex_colour?: InputMaybe<Scalars['String']>;
};

export type pdb_sequence_InsertInput = {
  pdb_seq: Scalars['String'];
  pdb_id: Scalars['String'];
  chain?: InputMaybe<Scalars['String']>;
};

export type pdb_sequence_UpdateInput = {
  pdb_seq?: InputMaybe<Scalars['String']>;
  pdb_id?: InputMaybe<Scalars['String']>;
  chain?: InputMaybe<Scalars['String']>;
};

export type processed_data_InsertInput = {
  rfam_acc: Scalars['String'];
  cm?: InputMaybe<Scalars['String']>;
  ss_stats_pbp?: InputMaybe<Scalars['String']>;
  ss_stats_seq?: InputMaybe<Scalars['String']>;
  ss_stats_fam?: InputMaybe<Scalars['String']>;
  scores_graph?: InputMaybe<Scalars['String']>;
  genome_full?: InputMaybe<Scalars['String']>;
  genome_full_md5?: InputMaybe<Scalars['String']>;
  refseq_full?: InputMaybe<Scalars['String']>;
  refseq_full_md5?: InputMaybe<Scalars['String']>;
};

export type processed_data_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  cm?: InputMaybe<Scalars['String']>;
  ss_stats_pbp?: InputMaybe<Scalars['String']>;
  ss_stats_seq?: InputMaybe<Scalars['String']>;
  ss_stats_fam?: InputMaybe<Scalars['String']>;
  scores_graph?: InputMaybe<Scalars['String']>;
  genome_full?: InputMaybe<Scalars['String']>;
  genome_full_md5?: InputMaybe<Scalars['String']>;
  refseq_full?: InputMaybe<Scalars['String']>;
  refseq_full_md5?: InputMaybe<Scalars['String']>;
};

export type pseudoknot_InsertInput = {
  rfam_acc: Scalars['String'];
  pseudoknot_id: Scalars['String'];
  source: pseudoknot_source;
  covariation?: InputMaybe<Scalars['Int']>;
};

export type pseudoknot_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  pseudoknot_id?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<pseudoknot_source>;
  covariation?: InputMaybe<Scalars['Int']>;
};

export type refseq_InsertInput = {
  refseq_acc: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  ncbi_taxid?: InputMaybe<Scalars['Int']>;
};

export type refseq_UpdateInput = {
  refseq_acc?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['String']>;
  ncbi_taxid?: InputMaybe<Scalars['Int']>;
};

export type refseq_full_region_InsertInput = {
  rfam_acc: Scalars['String'];
  refseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  /** 99999.99 is the approx limit from Infernal. */
  bit_score: Scalars['Float'];
  evalue_score: Scalars['String'];
  cm_start: Scalars['Int'];
  cm_end: Scalars['Int'];
  truncated: refseq_full_region_truncated;
};

export type refseq_full_region_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  refseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  /** 99999.99 is the approx limit from Infernal. */
  bit_score?: InputMaybe<Scalars['Float']>;
  evalue_score?: InputMaybe<Scalars['String']>;
  cm_start?: InputMaybe<Scalars['Int']>;
  cm_end?: InputMaybe<Scalars['Int']>;
  truncated?: InputMaybe<refseq_full_region_truncated>;
};

export type rfamseq_InsertInput = {
  /** This should be  */
  rfamseq_acc: Scalars['String'];
  accession: Scalars['String'];
  version: Scalars['Int'];
  ncbi_id: Scalars['Int'];
  mol_type: rfamseq_mol_type;
  length?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  previous_acc?: InputMaybe<Scalars['String']>;
  source: Scalars['String'];
};

export type rfamseq_UpdateInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  accession?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  ncbi_id?: InputMaybe<Scalars['Int']>;
  mol_type?: InputMaybe<rfamseq_mol_type>;
  length?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  previous_acc?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type rfamseq_temp_InsertInput = {
  /** This should be  */
  rfamseq_acc: Scalars['String'];
  accession: Scalars['String'];
  version: Scalars['Int'];
  ncbi_id: Scalars['Int'];
  mol_type: rfamseq_temp_mol_type;
  length?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  previous_acc?: InputMaybe<Scalars['String']>;
  source: Scalars['String'];
};

export type rfamseq_temp_UpdateInput = {
  /** This should be  */
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  accession?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
  ncbi_id?: InputMaybe<Scalars['Int']>;
  mol_type?: InputMaybe<rfamseq_temp_mol_type>;
  length?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  previous_acc?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
};

export type rnacentral_matches_InsertInput = {
  rfamseq_acc: Scalars['String'];
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  md5: Scalars['String'];
  rnacentral_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<rnacentral_matches_type>;
};

export type rnacentral_matches_UpdateInput = {
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  md5?: InputMaybe<Scalars['String']>;
  rnacentral_id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<rnacentral_matches_type>;
};

export type rscape_annotations_InsertInput = {
  rfam_acc: Scalars['String'];
  F?: InputMaybe<Scalars['Float']>;
  sensitivity?: InputMaybe<Scalars['Float']>;
  ppv?: InputMaybe<Scalars['Float']>;
  true?: InputMaybe<Scalars['Int']>;
  found?: InputMaybe<Scalars['Int']>;
  tp?: InputMaybe<Scalars['Int']>;
  avgid?: InputMaybe<Scalars['Float']>;
  alen?: InputMaybe<Scalars['Int']>;
  nseq?: InputMaybe<Scalars['Int']>;
};

export type rscape_annotations_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  F?: InputMaybe<Scalars['Float']>;
  sensitivity?: InputMaybe<Scalars['Float']>;
  ppv?: InputMaybe<Scalars['Float']>;
  true?: InputMaybe<Scalars['Int']>;
  found?: InputMaybe<Scalars['Int']>;
  tp?: InputMaybe<Scalars['Int']>;
  avgid?: InputMaybe<Scalars['Float']>;
  alen?: InputMaybe<Scalars['Int']>;
  nseq?: InputMaybe<Scalars['Int']>;
};

export type secondary_structure_image_InsertInput = {
  rfam_acc: Scalars['String'];
  type?: InputMaybe<secondary_structure_image_type>;
  image?: InputMaybe<Scalars['String']>;
};

export type secondary_structure_image_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<secondary_structure_image_type>;
  image?: InputMaybe<Scalars['String']>;
};

export type seed_region_InsertInput = {
  rfam_acc: Scalars['String'];
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start: Scalars['BigInt'];
  seq_end: Scalars['BigInt'];
  md5?: InputMaybe<Scalars['String']>;
};

export type seed_region_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  rfamseq_acc?: InputMaybe<Scalars['String']>;
  seq_start?: InputMaybe<Scalars['BigInt']>;
  seq_end?: InputMaybe<Scalars['BigInt']>;
  md5?: InputMaybe<Scalars['String']>;
};

export type sunburst_InsertInput = {
  rfam_acc: Scalars['String'];
  data: Scalars['String'];
  type: sunburst_type;
};

export type sunburst_UpdateInput = {
  rfam_acc?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<sunburst_type>;
};

export type taxonomic_tree_InsertInput = {
  ncbi_code: Scalars['Int'];
  species?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['Int']>;
  rgt?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
};

export type taxonomic_tree_UpdateInput = {
  ncbi_code?: InputMaybe<Scalars['Int']>;
  species?: InputMaybe<Scalars['String']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['Int']>;
  rgt?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['String']>;
  level?: InputMaybe<Scalars['String']>;
};

export type taxonomy_InsertInput = {
  ncbi_id: Scalars['Int'];
  species: Scalars['String'];
  tax_string?: InputMaybe<Scalars['String']>;
  tree_display_name?: InputMaybe<Scalars['String']>;
  align_display_name?: InputMaybe<Scalars['String']>;
};

export type taxonomy_UpdateInput = {
  ncbi_id?: InputMaybe<Scalars['Int']>;
  species?: InputMaybe<Scalars['String']>;
  tax_string?: InputMaybe<Scalars['String']>;
  tree_display_name?: InputMaybe<Scalars['String']>;
  align_display_name?: InputMaybe<Scalars['String']>;
};

export type taxonomy_websearch_InsertInput = {
  ncbi_id?: InputMaybe<Scalars['Int']>;
  species?: InputMaybe<Scalars['String']>;
  rgt?: InputMaybe<Scalars['Int']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['String']>;
  minimal: Scalars['Int'];
  rank?: InputMaybe<Scalars['String']>;
};

export type taxonomy_websearch_UpdateInput = {
  ncbi_id?: InputMaybe<Scalars['Int']>;
  species?: InputMaybe<Scalars['String']>;
  rgt?: InputMaybe<Scalars['Int']>;
  taxonomy?: InputMaybe<Scalars['String']>;
  lft?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['Int']>;
  level?: InputMaybe<Scalars['String']>;
  minimal?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<Scalars['String']>;
};

export type version_InsertInput = {
  rfam_release: Scalars['Float'];
  rfam_release_date: Scalars['Date'];
  number_families: Scalars['Int'];
  embl_release: Scalars['String'];
};

export type version_UpdateInput = {
  rfam_release?: InputMaybe<Scalars['Float']>;
  rfam_release_date?: InputMaybe<Scalars['Date']>;
  number_families?: InputMaybe<Scalars['Int']>;
  embl_release?: InputMaybe<Scalars['String']>;
};

export type wikitext_InsertInput = {
  auto_wiki: Scalars['Int'];
  title: Scalars['String'];
};

export type wikitext_UpdateInput = {
  auto_wiki?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

  export type QuerySdk = {
      /** undefined **/
  _annotated_file: InContextSdkMethod<Query['_annotated_file'], Query_annotated_fileArgs, MeshContext>,
  /** undefined **/
  count__annotated_file: InContextSdkMethod<Query['count__annotated_file'], Querycount__annotated_fileArgs, MeshContext>,
  /** undefined **/
  _family_file: InContextSdkMethod<Query['_family_file'], Query_family_fileArgs, MeshContext>,
  /** undefined **/
  count__family_file: InContextSdkMethod<Query['count__family_file'], Querycount__family_fileArgs, MeshContext>,
  /** undefined **/
  _genome_data: InContextSdkMethod<Query['_genome_data'], Query_genome_dataArgs, MeshContext>,
  /** undefined **/
  count__genome_data: InContextSdkMethod<Query['count__genome_data'], Querycount__genome_dataArgs, MeshContext>,
  /** undefined **/
  _lock: InContextSdkMethod<Query['_lock'], Query_lockArgs, MeshContext>,
  /** undefined **/
  count__lock: InContextSdkMethod<Query['count__lock'], Querycount__lockArgs, MeshContext>,
  /** undefined **/
  _overlap: InContextSdkMethod<Query['_overlap'], Query_overlapArgs, MeshContext>,
  /** undefined **/
  count__overlap: InContextSdkMethod<Query['count__overlap'], Querycount__overlapArgs, MeshContext>,
  /** undefined **/
  _overlap_membership: InContextSdkMethod<Query['_overlap_membership'], Query_overlap_membershipArgs, MeshContext>,
  /** undefined **/
  count__overlap_membership: InContextSdkMethod<Query['count__overlap_membership'], Querycount__overlap_membershipArgs, MeshContext>,
  /** undefined **/
  _post_process: InContextSdkMethod<Query['_post_process'], Query_post_processArgs, MeshContext>,
  /** undefined **/
  count__post_process: InContextSdkMethod<Query['count__post_process'], Querycount__post_processArgs, MeshContext>,
  /** undefined **/
  alignment_and_tree: InContextSdkMethod<Query['alignment_and_tree'], Queryalignment_and_treeArgs, MeshContext>,
  /** undefined **/
  count_alignment_and_tree: InContextSdkMethod<Query['count_alignment_and_tree'], Querycount_alignment_and_treeArgs, MeshContext>,
  /** undefined **/
  author: InContextSdkMethod<Query['author'], QueryauthorArgs, MeshContext>,
  /** undefined **/
  count_author: InContextSdkMethod<Query['count_author'], Querycount_authorArgs, MeshContext>,
  /** undefined **/
  clan: InContextSdkMethod<Query['clan'], QueryclanArgs, MeshContext>,
  /** undefined **/
  count_clan: InContextSdkMethod<Query['count_clan'], Querycount_clanArgs, MeshContext>,
  /** undefined **/
  clan_database_link: InContextSdkMethod<Query['clan_database_link'], Queryclan_database_linkArgs, MeshContext>,
  /** undefined **/
  count_clan_database_link: InContextSdkMethod<Query['count_clan_database_link'], Querycount_clan_database_linkArgs, MeshContext>,
  /** undefined **/
  clan_literature_reference: InContextSdkMethod<Query['clan_literature_reference'], Queryclan_literature_referenceArgs, MeshContext>,
  /** undefined **/
  count_clan_literature_reference: InContextSdkMethod<Query['count_clan_literature_reference'], Querycount_clan_literature_referenceArgs, MeshContext>,
  /** undefined **/
  clan_membership: InContextSdkMethod<Query['clan_membership'], Queryclan_membershipArgs, MeshContext>,
  /** undefined **/
  count_clan_membership: InContextSdkMethod<Query['count_clan_membership'], Querycount_clan_membershipArgs, MeshContext>,
  /** undefined **/
  database_link: InContextSdkMethod<Query['database_link'], Querydatabase_linkArgs, MeshContext>,
  /** undefined **/
  count_database_link: InContextSdkMethod<Query['count_database_link'], Querycount_database_linkArgs, MeshContext>,
  /** undefined **/
  db_version: InContextSdkMethod<Query['db_version'], Querydb_versionArgs, MeshContext>,
  /** undefined **/
  count_db_version: InContextSdkMethod<Query['count_db_version'], Querycount_db_versionArgs, MeshContext>,
  /** undefined **/
  dead_clan: InContextSdkMethod<Query['dead_clan'], Querydead_clanArgs, MeshContext>,
  /** undefined **/
  count_dead_clan: InContextSdkMethod<Query['count_dead_clan'], Querycount_dead_clanArgs, MeshContext>,
  /** undefined **/
  dead_family: InContextSdkMethod<Query['dead_family'], Querydead_familyArgs, MeshContext>,
  /** undefined **/
  count_dead_family: InContextSdkMethod<Query['count_dead_family'], Querycount_dead_familyArgs, MeshContext>,
  /** undefined **/
  ensembl_names: InContextSdkMethod<Query['ensembl_names'], Queryensembl_namesArgs, MeshContext>,
  /** undefined **/
  count_ensembl_names: InContextSdkMethod<Query['count_ensembl_names'], Querycount_ensembl_namesArgs, MeshContext>,
  /** undefined **/
  family: InContextSdkMethod<Query['family'], QueryfamilyArgs, MeshContext>,
  /** undefined **/
  count_family: InContextSdkMethod<Query['count_family'], Querycount_familyArgs, MeshContext>,
  /** undefined **/
  family_author: InContextSdkMethod<Query['family_author'], Queryfamily_authorArgs, MeshContext>,
  /** undefined **/
  count_family_author: InContextSdkMethod<Query['count_family_author'], Querycount_family_authorArgs, MeshContext>,
  /** undefined **/
  family_literature_reference: InContextSdkMethod<Query['family_literature_reference'], Queryfamily_literature_referenceArgs, MeshContext>,
  /** undefined **/
  count_family_literature_reference: InContextSdkMethod<Query['count_family_literature_reference'], Querycount_family_literature_referenceArgs, MeshContext>,
  /** undefined **/
  family_long: InContextSdkMethod<Query['family_long'], Queryfamily_longArgs, MeshContext>,
  /** undefined **/
  count_family_long: InContextSdkMethod<Query['count_family_long'], Querycount_family_longArgs, MeshContext>,
  /** undefined **/
  family_ncbi: InContextSdkMethod<Query['family_ncbi'], Queryfamily_ncbiArgs, MeshContext>,
  /** undefined **/
  count_family_ncbi: InContextSdkMethod<Query['count_family_ncbi'], Querycount_family_ncbiArgs, MeshContext>,
  /** undefined **/
  features: InContextSdkMethod<Query['features'], QueryfeaturesArgs, MeshContext>,
  /** undefined **/
  count_features: InContextSdkMethod<Query['count_features'], Querycount_featuresArgs, MeshContext>,
  /** undefined **/
  full_region: InContextSdkMethod<Query['full_region'], Queryfull_regionArgs, MeshContext>,
  /** undefined **/
  count_full_region: InContextSdkMethod<Query['count_full_region'], Querycount_full_regionArgs, MeshContext>,
  /** undefined **/
  genome: InContextSdkMethod<Query['genome'], QuerygenomeArgs, MeshContext>,
  /** undefined **/
  count_genome: InContextSdkMethod<Query['count_genome'], Querycount_genomeArgs, MeshContext>,
  /** undefined **/
  genome_temp: InContextSdkMethod<Query['genome_temp'], Querygenome_tempArgs, MeshContext>,
  /** undefined **/
  count_genome_temp: InContextSdkMethod<Query['count_genome_temp'], Querycount_genome_tempArgs, MeshContext>,
  /** undefined **/
  genseq: InContextSdkMethod<Query['genseq'], QuerygenseqArgs, MeshContext>,
  /** undefined **/
  count_genseq: InContextSdkMethod<Query['count_genseq'], Querycount_genseqArgs, MeshContext>,
  /** undefined **/
  genseq_temp: InContextSdkMethod<Query['genseq_temp'], Querygenseq_tempArgs, MeshContext>,
  /** undefined **/
  count_genseq_temp: InContextSdkMethod<Query['count_genseq_temp'], Querycount_genseq_tempArgs, MeshContext>,
  /** undefined **/
  html_alignment: InContextSdkMethod<Query['html_alignment'], Queryhtml_alignmentArgs, MeshContext>,
  /** undefined **/
  count_html_alignment: InContextSdkMethod<Query['count_html_alignment'], Querycount_html_alignmentArgs, MeshContext>,
  /** undefined **/
  keywords: InContextSdkMethod<Query['keywords'], QuerykeywordsArgs, MeshContext>,
  /** undefined **/
  count_keywords: InContextSdkMethod<Query['count_keywords'], Querycount_keywordsArgs, MeshContext>,
  /** undefined **/
  literature_reference: InContextSdkMethod<Query['literature_reference'], Queryliterature_referenceArgs, MeshContext>,
  /** undefined **/
  count_literature_reference: InContextSdkMethod<Query['count_literature_reference'], Querycount_literature_referenceArgs, MeshContext>,
  /** undefined **/
  matches_and_fasta: InContextSdkMethod<Query['matches_and_fasta'], Querymatches_and_fastaArgs, MeshContext>,
  /** undefined **/
  count_matches_and_fasta: InContextSdkMethod<Query['count_matches_and_fasta'], Querycount_matches_and_fastaArgs, MeshContext>,
  /** undefined **/
  motif: InContextSdkMethod<Query['motif'], QuerymotifArgs, MeshContext>,
  /** undefined **/
  count_motif: InContextSdkMethod<Query['count_motif'], Querycount_motifArgs, MeshContext>,
  /** undefined **/
  motif_database_link: InContextSdkMethod<Query['motif_database_link'], Querymotif_database_linkArgs, MeshContext>,
  /** undefined **/
  count_motif_database_link: InContextSdkMethod<Query['count_motif_database_link'], Querycount_motif_database_linkArgs, MeshContext>,
  /** undefined **/
  motif_family_stats: InContextSdkMethod<Query['motif_family_stats'], Querymotif_family_statsArgs, MeshContext>,
  /** undefined **/
  count_motif_family_stats: InContextSdkMethod<Query['count_motif_family_stats'], Querycount_motif_family_statsArgs, MeshContext>,
  /** undefined **/
  motif_file: InContextSdkMethod<Query['motif_file'], Querymotif_fileArgs, MeshContext>,
  /** undefined **/
  count_motif_file: InContextSdkMethod<Query['count_motif_file'], Querycount_motif_fileArgs, MeshContext>,
  /** undefined **/
  motif_literature: InContextSdkMethod<Query['motif_literature'], Querymotif_literatureArgs, MeshContext>,
  /** undefined **/
  count_motif_literature: InContextSdkMethod<Query['count_motif_literature'], Querycount_motif_literatureArgs, MeshContext>,
  /** undefined **/
  motif_matches: InContextSdkMethod<Query['motif_matches'], Querymotif_matchesArgs, MeshContext>,
  /** undefined **/
  count_motif_matches: InContextSdkMethod<Query['count_motif_matches'], Querycount_motif_matchesArgs, MeshContext>,
  /** undefined **/
  motif_old: InContextSdkMethod<Query['motif_old'], Querymotif_oldArgs, MeshContext>,
  /** undefined **/
  count_motif_old: InContextSdkMethod<Query['count_motif_old'], Querycount_motif_oldArgs, MeshContext>,
  /** undefined **/
  motif_pdb: InContextSdkMethod<Query['motif_pdb'], Querymotif_pdbArgs, MeshContext>,
  /** undefined **/
  count_motif_pdb: InContextSdkMethod<Query['count_motif_pdb'], Querycount_motif_pdbArgs, MeshContext>,
  /** undefined **/
  motif_ss_image: InContextSdkMethod<Query['motif_ss_image'], Querymotif_ss_imageArgs, MeshContext>,
  /** undefined **/
  count_motif_ss_image: InContextSdkMethod<Query['count_motif_ss_image'], Querycount_motif_ss_imageArgs, MeshContext>,
  /** undefined **/
  pdb: InContextSdkMethod<Query['pdb'], QuerypdbArgs, MeshContext>,
  /** undefined **/
  count_pdb: InContextSdkMethod<Query['count_pdb'], Querycount_pdbArgs, MeshContext>,
  /** undefined **/
  pdb_full_region: InContextSdkMethod<Query['pdb_full_region'], Querypdb_full_regionArgs, MeshContext>,
  /** undefined **/
  count_pdb_full_region: InContextSdkMethod<Query['count_pdb_full_region'], Querycount_pdb_full_regionArgs, MeshContext>,
  /** undefined **/
  pdb_full_region_old: InContextSdkMethod<Query['pdb_full_region_old'], Querypdb_full_region_oldArgs, MeshContext>,
  /** undefined **/
  count_pdb_full_region_old: InContextSdkMethod<Query['count_pdb_full_region_old'], Querycount_pdb_full_region_oldArgs, MeshContext>,
  /** undefined **/
  pdb_rfam_reg: InContextSdkMethod<Query['pdb_rfam_reg'], Querypdb_rfam_regArgs, MeshContext>,
  /** undefined **/
  count_pdb_rfam_reg: InContextSdkMethod<Query['count_pdb_rfam_reg'], Querycount_pdb_rfam_regArgs, MeshContext>,
  /** undefined **/
  pdb_sequence: InContextSdkMethod<Query['pdb_sequence'], Querypdb_sequenceArgs, MeshContext>,
  /** undefined **/
  count_pdb_sequence: InContextSdkMethod<Query['count_pdb_sequence'], Querycount_pdb_sequenceArgs, MeshContext>,
  /** undefined **/
  processed_data: InContextSdkMethod<Query['processed_data'], Queryprocessed_dataArgs, MeshContext>,
  /** undefined **/
  count_processed_data: InContextSdkMethod<Query['count_processed_data'], Querycount_processed_dataArgs, MeshContext>,
  /** undefined **/
  pseudoknot: InContextSdkMethod<Query['pseudoknot'], QuerypseudoknotArgs, MeshContext>,
  /** undefined **/
  count_pseudoknot: InContextSdkMethod<Query['count_pseudoknot'], Querycount_pseudoknotArgs, MeshContext>,
  /** undefined **/
  refseq: InContextSdkMethod<Query['refseq'], QueryrefseqArgs, MeshContext>,
  /** undefined **/
  count_refseq: InContextSdkMethod<Query['count_refseq'], Querycount_refseqArgs, MeshContext>,
  /** undefined **/
  refseq_full_region: InContextSdkMethod<Query['refseq_full_region'], Queryrefseq_full_regionArgs, MeshContext>,
  /** undefined **/
  count_refseq_full_region: InContextSdkMethod<Query['count_refseq_full_region'], Querycount_refseq_full_regionArgs, MeshContext>,
  /** undefined **/
  rfamseq: InContextSdkMethod<Query['rfamseq'], QueryrfamseqArgs, MeshContext>,
  /** undefined **/
  count_rfamseq: InContextSdkMethod<Query['count_rfamseq'], Querycount_rfamseqArgs, MeshContext>,
  /** undefined **/
  rfamseq_temp: InContextSdkMethod<Query['rfamseq_temp'], Queryrfamseq_tempArgs, MeshContext>,
  /** undefined **/
  count_rfamseq_temp: InContextSdkMethod<Query['count_rfamseq_temp'], Querycount_rfamseq_tempArgs, MeshContext>,
  /** undefined **/
  rnacentral_matches: InContextSdkMethod<Query['rnacentral_matches'], Queryrnacentral_matchesArgs, MeshContext>,
  /** undefined **/
  count_rnacentral_matches: InContextSdkMethod<Query['count_rnacentral_matches'], Querycount_rnacentral_matchesArgs, MeshContext>,
  /** undefined **/
  rscape_annotations: InContextSdkMethod<Query['rscape_annotations'], Queryrscape_annotationsArgs, MeshContext>,
  /** undefined **/
  count_rscape_annotations: InContextSdkMethod<Query['count_rscape_annotations'], Querycount_rscape_annotationsArgs, MeshContext>,
  /** undefined **/
  secondary_structure_image: InContextSdkMethod<Query['secondary_structure_image'], Querysecondary_structure_imageArgs, MeshContext>,
  /** undefined **/
  count_secondary_structure_image: InContextSdkMethod<Query['count_secondary_structure_image'], Querycount_secondary_structure_imageArgs, MeshContext>,
  /** undefined **/
  seed_region: InContextSdkMethod<Query['seed_region'], Queryseed_regionArgs, MeshContext>,
  /** undefined **/
  count_seed_region: InContextSdkMethod<Query['count_seed_region'], Querycount_seed_regionArgs, MeshContext>,
  /** undefined **/
  sunburst: InContextSdkMethod<Query['sunburst'], QuerysunburstArgs, MeshContext>,
  /** undefined **/
  count_sunburst: InContextSdkMethod<Query['count_sunburst'], Querycount_sunburstArgs, MeshContext>,
  /** undefined **/
  taxonomic_tree: InContextSdkMethod<Query['taxonomic_tree'], Querytaxonomic_treeArgs, MeshContext>,
  /** undefined **/
  count_taxonomic_tree: InContextSdkMethod<Query['count_taxonomic_tree'], Querycount_taxonomic_treeArgs, MeshContext>,
  /** undefined **/
  taxonomy: InContextSdkMethod<Query['taxonomy'], QuerytaxonomyArgs, MeshContext>,
  /** undefined **/
  count_taxonomy: InContextSdkMethod<Query['count_taxonomy'], Querycount_taxonomyArgs, MeshContext>,
  /** undefined **/
  taxonomy_websearch: InContextSdkMethod<Query['taxonomy_websearch'], Querytaxonomy_websearchArgs, MeshContext>,
  /** undefined **/
  count_taxonomy_websearch: InContextSdkMethod<Query['count_taxonomy_websearch'], Querycount_taxonomy_websearchArgs, MeshContext>,
  /** undefined **/
  version: InContextSdkMethod<Query['version'], QueryversionArgs, MeshContext>,
  /** undefined **/
  count_version: InContextSdkMethod<Query['count_version'], Querycount_versionArgs, MeshContext>,
  /** undefined **/
  wikitext: InContextSdkMethod<Query['wikitext'], QuerywikitextArgs, MeshContext>,
  /** undefined **/
  count_wikitext: InContextSdkMethod<Query['count_wikitext'], Querycount_wikitextArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  insert__annotated_file: InContextSdkMethod<Mutation['insert__annotated_file'], Mutationinsert__annotated_fileArgs, MeshContext>,
  /** undefined **/
  update__annotated_file: InContextSdkMethod<Mutation['update__annotated_file'], Mutationupdate__annotated_fileArgs, MeshContext>,
  /** undefined **/
  delete__annotated_file: InContextSdkMethod<Mutation['delete__annotated_file'], Mutationdelete__annotated_fileArgs, MeshContext>,
  /** undefined **/
  insert__family_file: InContextSdkMethod<Mutation['insert__family_file'], Mutationinsert__family_fileArgs, MeshContext>,
  /** undefined **/
  update__family_file: InContextSdkMethod<Mutation['update__family_file'], Mutationupdate__family_fileArgs, MeshContext>,
  /** undefined **/
  delete__family_file: InContextSdkMethod<Mutation['delete__family_file'], Mutationdelete__family_fileArgs, MeshContext>,
  /** undefined **/
  insert__genome_data: InContextSdkMethod<Mutation['insert__genome_data'], Mutationinsert__genome_dataArgs, MeshContext>,
  /** undefined **/
  update__genome_data: InContextSdkMethod<Mutation['update__genome_data'], Mutationupdate__genome_dataArgs, MeshContext>,
  /** undefined **/
  delete__genome_data: InContextSdkMethod<Mutation['delete__genome_data'], Mutationdelete__genome_dataArgs, MeshContext>,
  /** undefined **/
  insert__lock: InContextSdkMethod<Mutation['insert__lock'], Mutationinsert__lockArgs, MeshContext>,
  /** undefined **/
  update__lock: InContextSdkMethod<Mutation['update__lock'], Mutationupdate__lockArgs, MeshContext>,
  /** undefined **/
  delete__lock: InContextSdkMethod<Mutation['delete__lock'], Mutationdelete__lockArgs, MeshContext>,
  /** undefined **/
  insert__overlap: InContextSdkMethod<Mutation['insert__overlap'], Mutationinsert__overlapArgs, MeshContext>,
  /** undefined **/
  update__overlap: InContextSdkMethod<Mutation['update__overlap'], Mutationupdate__overlapArgs, MeshContext>,
  /** undefined **/
  delete__overlap: InContextSdkMethod<Mutation['delete__overlap'], Mutationdelete__overlapArgs, MeshContext>,
  /** undefined **/
  insert__overlap_membership: InContextSdkMethod<Mutation['insert__overlap_membership'], Mutationinsert__overlap_membershipArgs, MeshContext>,
  /** undefined **/
  update__overlap_membership: InContextSdkMethod<Mutation['update__overlap_membership'], Mutationupdate__overlap_membershipArgs, MeshContext>,
  /** undefined **/
  delete__overlap_membership: InContextSdkMethod<Mutation['delete__overlap_membership'], Mutationdelete__overlap_membershipArgs, MeshContext>,
  /** undefined **/
  insert__post_process: InContextSdkMethod<Mutation['insert__post_process'], Mutationinsert__post_processArgs, MeshContext>,
  /** undefined **/
  update__post_process: InContextSdkMethod<Mutation['update__post_process'], Mutationupdate__post_processArgs, MeshContext>,
  /** undefined **/
  delete__post_process: InContextSdkMethod<Mutation['delete__post_process'], Mutationdelete__post_processArgs, MeshContext>,
  /** undefined **/
  insert_alignment_and_tree: InContextSdkMethod<Mutation['insert_alignment_and_tree'], Mutationinsert_alignment_and_treeArgs, MeshContext>,
  /** undefined **/
  update_alignment_and_tree: InContextSdkMethod<Mutation['update_alignment_and_tree'], Mutationupdate_alignment_and_treeArgs, MeshContext>,
  /** undefined **/
  delete_alignment_and_tree: InContextSdkMethod<Mutation['delete_alignment_and_tree'], Mutationdelete_alignment_and_treeArgs, MeshContext>,
  /** undefined **/
  insert_author: InContextSdkMethod<Mutation['insert_author'], Mutationinsert_authorArgs, MeshContext>,
  /** undefined **/
  update_author: InContextSdkMethod<Mutation['update_author'], Mutationupdate_authorArgs, MeshContext>,
  /** undefined **/
  delete_author: InContextSdkMethod<Mutation['delete_author'], Mutationdelete_authorArgs, MeshContext>,
  /** undefined **/
  insert_clan: InContextSdkMethod<Mutation['insert_clan'], Mutationinsert_clanArgs, MeshContext>,
  /** undefined **/
  update_clan: InContextSdkMethod<Mutation['update_clan'], Mutationupdate_clanArgs, MeshContext>,
  /** undefined **/
  delete_clan: InContextSdkMethod<Mutation['delete_clan'], Mutationdelete_clanArgs, MeshContext>,
  /** undefined **/
  insert_clan_database_link: InContextSdkMethod<Mutation['insert_clan_database_link'], Mutationinsert_clan_database_linkArgs, MeshContext>,
  /** undefined **/
  update_clan_database_link: InContextSdkMethod<Mutation['update_clan_database_link'], Mutationupdate_clan_database_linkArgs, MeshContext>,
  /** undefined **/
  delete_clan_database_link: InContextSdkMethod<Mutation['delete_clan_database_link'], Mutationdelete_clan_database_linkArgs, MeshContext>,
  /** undefined **/
  insert_clan_literature_reference: InContextSdkMethod<Mutation['insert_clan_literature_reference'], Mutationinsert_clan_literature_referenceArgs, MeshContext>,
  /** undefined **/
  update_clan_literature_reference: InContextSdkMethod<Mutation['update_clan_literature_reference'], Mutationupdate_clan_literature_referenceArgs, MeshContext>,
  /** undefined **/
  delete_clan_literature_reference: InContextSdkMethod<Mutation['delete_clan_literature_reference'], Mutationdelete_clan_literature_referenceArgs, MeshContext>,
  /** undefined **/
  insert_clan_membership: InContextSdkMethod<Mutation['insert_clan_membership'], Mutationinsert_clan_membershipArgs, MeshContext>,
  /** undefined **/
  update_clan_membership: InContextSdkMethod<Mutation['update_clan_membership'], Mutationupdate_clan_membershipArgs, MeshContext>,
  /** undefined **/
  delete_clan_membership: InContextSdkMethod<Mutation['delete_clan_membership'], Mutationdelete_clan_membershipArgs, MeshContext>,
  /** undefined **/
  insert_database_link: InContextSdkMethod<Mutation['insert_database_link'], Mutationinsert_database_linkArgs, MeshContext>,
  /** undefined **/
  update_database_link: InContextSdkMethod<Mutation['update_database_link'], Mutationupdate_database_linkArgs, MeshContext>,
  /** undefined **/
  delete_database_link: InContextSdkMethod<Mutation['delete_database_link'], Mutationdelete_database_linkArgs, MeshContext>,
  /** undefined **/
  insert_db_version: InContextSdkMethod<Mutation['insert_db_version'], Mutationinsert_db_versionArgs, MeshContext>,
  /** undefined **/
  update_db_version: InContextSdkMethod<Mutation['update_db_version'], Mutationupdate_db_versionArgs, MeshContext>,
  /** undefined **/
  delete_db_version: InContextSdkMethod<Mutation['delete_db_version'], Mutationdelete_db_versionArgs, MeshContext>,
  /** undefined **/
  insert_dead_clan: InContextSdkMethod<Mutation['insert_dead_clan'], Mutationinsert_dead_clanArgs, MeshContext>,
  /** undefined **/
  update_dead_clan: InContextSdkMethod<Mutation['update_dead_clan'], Mutationupdate_dead_clanArgs, MeshContext>,
  /** undefined **/
  delete_dead_clan: InContextSdkMethod<Mutation['delete_dead_clan'], Mutationdelete_dead_clanArgs, MeshContext>,
  /** undefined **/
  insert_dead_family: InContextSdkMethod<Mutation['insert_dead_family'], Mutationinsert_dead_familyArgs, MeshContext>,
  /** undefined **/
  update_dead_family: InContextSdkMethod<Mutation['update_dead_family'], Mutationupdate_dead_familyArgs, MeshContext>,
  /** undefined **/
  delete_dead_family: InContextSdkMethod<Mutation['delete_dead_family'], Mutationdelete_dead_familyArgs, MeshContext>,
  /** undefined **/
  insert_ensembl_names: InContextSdkMethod<Mutation['insert_ensembl_names'], Mutationinsert_ensembl_namesArgs, MeshContext>,
  /** undefined **/
  update_ensembl_names: InContextSdkMethod<Mutation['update_ensembl_names'], Mutationupdate_ensembl_namesArgs, MeshContext>,
  /** undefined **/
  delete_ensembl_names: InContextSdkMethod<Mutation['delete_ensembl_names'], Mutationdelete_ensembl_namesArgs, MeshContext>,
  /** undefined **/
  insert_family: InContextSdkMethod<Mutation['insert_family'], Mutationinsert_familyArgs, MeshContext>,
  /** undefined **/
  update_family: InContextSdkMethod<Mutation['update_family'], Mutationupdate_familyArgs, MeshContext>,
  /** undefined **/
  delete_family: InContextSdkMethod<Mutation['delete_family'], Mutationdelete_familyArgs, MeshContext>,
  /** undefined **/
  insert_family_author: InContextSdkMethod<Mutation['insert_family_author'], Mutationinsert_family_authorArgs, MeshContext>,
  /** undefined **/
  update_family_author: InContextSdkMethod<Mutation['update_family_author'], Mutationupdate_family_authorArgs, MeshContext>,
  /** undefined **/
  delete_family_author: InContextSdkMethod<Mutation['delete_family_author'], Mutationdelete_family_authorArgs, MeshContext>,
  /** undefined **/
  insert_family_literature_reference: InContextSdkMethod<Mutation['insert_family_literature_reference'], Mutationinsert_family_literature_referenceArgs, MeshContext>,
  /** undefined **/
  update_family_literature_reference: InContextSdkMethod<Mutation['update_family_literature_reference'], Mutationupdate_family_literature_referenceArgs, MeshContext>,
  /** undefined **/
  delete_family_literature_reference: InContextSdkMethod<Mutation['delete_family_literature_reference'], Mutationdelete_family_literature_referenceArgs, MeshContext>,
  /** undefined **/
  insert_family_long: InContextSdkMethod<Mutation['insert_family_long'], Mutationinsert_family_longArgs, MeshContext>,
  /** undefined **/
  update_family_long: InContextSdkMethod<Mutation['update_family_long'], Mutationupdate_family_longArgs, MeshContext>,
  /** undefined **/
  delete_family_long: InContextSdkMethod<Mutation['delete_family_long'], Mutationdelete_family_longArgs, MeshContext>,
  /** undefined **/
  insert_family_ncbi: InContextSdkMethod<Mutation['insert_family_ncbi'], Mutationinsert_family_ncbiArgs, MeshContext>,
  /** undefined **/
  update_family_ncbi: InContextSdkMethod<Mutation['update_family_ncbi'], Mutationupdate_family_ncbiArgs, MeshContext>,
  /** undefined **/
  delete_family_ncbi: InContextSdkMethod<Mutation['delete_family_ncbi'], Mutationdelete_family_ncbiArgs, MeshContext>,
  /** undefined **/
  insert_features: InContextSdkMethod<Mutation['insert_features'], Mutationinsert_featuresArgs, MeshContext>,
  /** undefined **/
  update_features: InContextSdkMethod<Mutation['update_features'], Mutationupdate_featuresArgs, MeshContext>,
  /** undefined **/
  delete_features: InContextSdkMethod<Mutation['delete_features'], Mutationdelete_featuresArgs, MeshContext>,
  /** undefined **/
  insert_full_region: InContextSdkMethod<Mutation['insert_full_region'], Mutationinsert_full_regionArgs, MeshContext>,
  /** undefined **/
  update_full_region: InContextSdkMethod<Mutation['update_full_region'], Mutationupdate_full_regionArgs, MeshContext>,
  /** undefined **/
  delete_full_region: InContextSdkMethod<Mutation['delete_full_region'], Mutationdelete_full_regionArgs, MeshContext>,
  /** undefined **/
  insert_genome: InContextSdkMethod<Mutation['insert_genome'], Mutationinsert_genomeArgs, MeshContext>,
  /** undefined **/
  update_genome: InContextSdkMethod<Mutation['update_genome'], Mutationupdate_genomeArgs, MeshContext>,
  /** undefined **/
  delete_genome: InContextSdkMethod<Mutation['delete_genome'], Mutationdelete_genomeArgs, MeshContext>,
  /** undefined **/
  insert_genome_temp: InContextSdkMethod<Mutation['insert_genome_temp'], Mutationinsert_genome_tempArgs, MeshContext>,
  /** undefined **/
  update_genome_temp: InContextSdkMethod<Mutation['update_genome_temp'], Mutationupdate_genome_tempArgs, MeshContext>,
  /** undefined **/
  delete_genome_temp: InContextSdkMethod<Mutation['delete_genome_temp'], Mutationdelete_genome_tempArgs, MeshContext>,
  /** undefined **/
  insert_genseq: InContextSdkMethod<Mutation['insert_genseq'], Mutationinsert_genseqArgs, MeshContext>,
  /** undefined **/
  update_genseq: InContextSdkMethod<Mutation['update_genseq'], Mutationupdate_genseqArgs, MeshContext>,
  /** undefined **/
  delete_genseq: InContextSdkMethod<Mutation['delete_genseq'], Mutationdelete_genseqArgs, MeshContext>,
  /** undefined **/
  insert_genseq_temp: InContextSdkMethod<Mutation['insert_genseq_temp'], Mutationinsert_genseq_tempArgs, MeshContext>,
  /** undefined **/
  update_genseq_temp: InContextSdkMethod<Mutation['update_genseq_temp'], Mutationupdate_genseq_tempArgs, MeshContext>,
  /** undefined **/
  delete_genseq_temp: InContextSdkMethod<Mutation['delete_genseq_temp'], Mutationdelete_genseq_tempArgs, MeshContext>,
  /** undefined **/
  insert_html_alignment: InContextSdkMethod<Mutation['insert_html_alignment'], Mutationinsert_html_alignmentArgs, MeshContext>,
  /** undefined **/
  update_html_alignment: InContextSdkMethod<Mutation['update_html_alignment'], Mutationupdate_html_alignmentArgs, MeshContext>,
  /** undefined **/
  delete_html_alignment: InContextSdkMethod<Mutation['delete_html_alignment'], Mutationdelete_html_alignmentArgs, MeshContext>,
  /** undefined **/
  insert_keywords: InContextSdkMethod<Mutation['insert_keywords'], Mutationinsert_keywordsArgs, MeshContext>,
  /** undefined **/
  update_keywords: InContextSdkMethod<Mutation['update_keywords'], Mutationupdate_keywordsArgs, MeshContext>,
  /** undefined **/
  delete_keywords: InContextSdkMethod<Mutation['delete_keywords'], Mutationdelete_keywordsArgs, MeshContext>,
  /** undefined **/
  insert_literature_reference: InContextSdkMethod<Mutation['insert_literature_reference'], Mutationinsert_literature_referenceArgs, MeshContext>,
  /** undefined **/
  update_literature_reference: InContextSdkMethod<Mutation['update_literature_reference'], Mutationupdate_literature_referenceArgs, MeshContext>,
  /** undefined **/
  delete_literature_reference: InContextSdkMethod<Mutation['delete_literature_reference'], Mutationdelete_literature_referenceArgs, MeshContext>,
  /** undefined **/
  insert_matches_and_fasta: InContextSdkMethod<Mutation['insert_matches_and_fasta'], Mutationinsert_matches_and_fastaArgs, MeshContext>,
  /** undefined **/
  update_matches_and_fasta: InContextSdkMethod<Mutation['update_matches_and_fasta'], Mutationupdate_matches_and_fastaArgs, MeshContext>,
  /** undefined **/
  delete_matches_and_fasta: InContextSdkMethod<Mutation['delete_matches_and_fasta'], Mutationdelete_matches_and_fastaArgs, MeshContext>,
  /** undefined **/
  insert_motif: InContextSdkMethod<Mutation['insert_motif'], Mutationinsert_motifArgs, MeshContext>,
  /** undefined **/
  update_motif: InContextSdkMethod<Mutation['update_motif'], Mutationupdate_motifArgs, MeshContext>,
  /** undefined **/
  delete_motif: InContextSdkMethod<Mutation['delete_motif'], Mutationdelete_motifArgs, MeshContext>,
  /** undefined **/
  insert_motif_database_link: InContextSdkMethod<Mutation['insert_motif_database_link'], Mutationinsert_motif_database_linkArgs, MeshContext>,
  /** undefined **/
  update_motif_database_link: InContextSdkMethod<Mutation['update_motif_database_link'], Mutationupdate_motif_database_linkArgs, MeshContext>,
  /** undefined **/
  delete_motif_database_link: InContextSdkMethod<Mutation['delete_motif_database_link'], Mutationdelete_motif_database_linkArgs, MeshContext>,
  /** undefined **/
  insert_motif_family_stats: InContextSdkMethod<Mutation['insert_motif_family_stats'], Mutationinsert_motif_family_statsArgs, MeshContext>,
  /** undefined **/
  update_motif_family_stats: InContextSdkMethod<Mutation['update_motif_family_stats'], Mutationupdate_motif_family_statsArgs, MeshContext>,
  /** undefined **/
  delete_motif_family_stats: InContextSdkMethod<Mutation['delete_motif_family_stats'], Mutationdelete_motif_family_statsArgs, MeshContext>,
  /** undefined **/
  insert_motif_file: InContextSdkMethod<Mutation['insert_motif_file'], Mutationinsert_motif_fileArgs, MeshContext>,
  /** undefined **/
  update_motif_file: InContextSdkMethod<Mutation['update_motif_file'], Mutationupdate_motif_fileArgs, MeshContext>,
  /** undefined **/
  delete_motif_file: InContextSdkMethod<Mutation['delete_motif_file'], Mutationdelete_motif_fileArgs, MeshContext>,
  /** undefined **/
  insert_motif_literature: InContextSdkMethod<Mutation['insert_motif_literature'], Mutationinsert_motif_literatureArgs, MeshContext>,
  /** undefined **/
  update_motif_literature: InContextSdkMethod<Mutation['update_motif_literature'], Mutationupdate_motif_literatureArgs, MeshContext>,
  /** undefined **/
  delete_motif_literature: InContextSdkMethod<Mutation['delete_motif_literature'], Mutationdelete_motif_literatureArgs, MeshContext>,
  /** undefined **/
  insert_motif_matches: InContextSdkMethod<Mutation['insert_motif_matches'], Mutationinsert_motif_matchesArgs, MeshContext>,
  /** undefined **/
  update_motif_matches: InContextSdkMethod<Mutation['update_motif_matches'], Mutationupdate_motif_matchesArgs, MeshContext>,
  /** undefined **/
  delete_motif_matches: InContextSdkMethod<Mutation['delete_motif_matches'], Mutationdelete_motif_matchesArgs, MeshContext>,
  /** undefined **/
  insert_motif_old: InContextSdkMethod<Mutation['insert_motif_old'], Mutationinsert_motif_oldArgs, MeshContext>,
  /** undefined **/
  update_motif_old: InContextSdkMethod<Mutation['update_motif_old'], Mutationupdate_motif_oldArgs, MeshContext>,
  /** undefined **/
  delete_motif_old: InContextSdkMethod<Mutation['delete_motif_old'], Mutationdelete_motif_oldArgs, MeshContext>,
  /** undefined **/
  insert_motif_pdb: InContextSdkMethod<Mutation['insert_motif_pdb'], Mutationinsert_motif_pdbArgs, MeshContext>,
  /** undefined **/
  update_motif_pdb: InContextSdkMethod<Mutation['update_motif_pdb'], Mutationupdate_motif_pdbArgs, MeshContext>,
  /** undefined **/
  delete_motif_pdb: InContextSdkMethod<Mutation['delete_motif_pdb'], Mutationdelete_motif_pdbArgs, MeshContext>,
  /** undefined **/
  insert_motif_ss_image: InContextSdkMethod<Mutation['insert_motif_ss_image'], Mutationinsert_motif_ss_imageArgs, MeshContext>,
  /** undefined **/
  update_motif_ss_image: InContextSdkMethod<Mutation['update_motif_ss_image'], Mutationupdate_motif_ss_imageArgs, MeshContext>,
  /** undefined **/
  delete_motif_ss_image: InContextSdkMethod<Mutation['delete_motif_ss_image'], Mutationdelete_motif_ss_imageArgs, MeshContext>,
  /** undefined **/
  insert_pdb: InContextSdkMethod<Mutation['insert_pdb'], Mutationinsert_pdbArgs, MeshContext>,
  /** undefined **/
  update_pdb: InContextSdkMethod<Mutation['update_pdb'], Mutationupdate_pdbArgs, MeshContext>,
  /** undefined **/
  delete_pdb: InContextSdkMethod<Mutation['delete_pdb'], Mutationdelete_pdbArgs, MeshContext>,
  /** undefined **/
  insert_pdb_full_region: InContextSdkMethod<Mutation['insert_pdb_full_region'], Mutationinsert_pdb_full_regionArgs, MeshContext>,
  /** undefined **/
  update_pdb_full_region: InContextSdkMethod<Mutation['update_pdb_full_region'], Mutationupdate_pdb_full_regionArgs, MeshContext>,
  /** undefined **/
  delete_pdb_full_region: InContextSdkMethod<Mutation['delete_pdb_full_region'], Mutationdelete_pdb_full_regionArgs, MeshContext>,
  /** undefined **/
  insert_pdb_full_region_old: InContextSdkMethod<Mutation['insert_pdb_full_region_old'], Mutationinsert_pdb_full_region_oldArgs, MeshContext>,
  /** undefined **/
  update_pdb_full_region_old: InContextSdkMethod<Mutation['update_pdb_full_region_old'], Mutationupdate_pdb_full_region_oldArgs, MeshContext>,
  /** undefined **/
  delete_pdb_full_region_old: InContextSdkMethod<Mutation['delete_pdb_full_region_old'], Mutationdelete_pdb_full_region_oldArgs, MeshContext>,
  /** undefined **/
  insert_pdb_rfam_reg: InContextSdkMethod<Mutation['insert_pdb_rfam_reg'], Mutationinsert_pdb_rfam_regArgs, MeshContext>,
  /** undefined **/
  update_pdb_rfam_reg: InContextSdkMethod<Mutation['update_pdb_rfam_reg'], Mutationupdate_pdb_rfam_regArgs, MeshContext>,
  /** undefined **/
  delete_pdb_rfam_reg: InContextSdkMethod<Mutation['delete_pdb_rfam_reg'], Mutationdelete_pdb_rfam_regArgs, MeshContext>,
  /** undefined **/
  insert_pdb_sequence: InContextSdkMethod<Mutation['insert_pdb_sequence'], Mutationinsert_pdb_sequenceArgs, MeshContext>,
  /** undefined **/
  update_pdb_sequence: InContextSdkMethod<Mutation['update_pdb_sequence'], Mutationupdate_pdb_sequenceArgs, MeshContext>,
  /** undefined **/
  delete_pdb_sequence: InContextSdkMethod<Mutation['delete_pdb_sequence'], Mutationdelete_pdb_sequenceArgs, MeshContext>,
  /** undefined **/
  insert_processed_data: InContextSdkMethod<Mutation['insert_processed_data'], Mutationinsert_processed_dataArgs, MeshContext>,
  /** undefined **/
  update_processed_data: InContextSdkMethod<Mutation['update_processed_data'], Mutationupdate_processed_dataArgs, MeshContext>,
  /** undefined **/
  delete_processed_data: InContextSdkMethod<Mutation['delete_processed_data'], Mutationdelete_processed_dataArgs, MeshContext>,
  /** undefined **/
  insert_pseudoknot: InContextSdkMethod<Mutation['insert_pseudoknot'], Mutationinsert_pseudoknotArgs, MeshContext>,
  /** undefined **/
  update_pseudoknot: InContextSdkMethod<Mutation['update_pseudoknot'], Mutationupdate_pseudoknotArgs, MeshContext>,
  /** undefined **/
  delete_pseudoknot: InContextSdkMethod<Mutation['delete_pseudoknot'], Mutationdelete_pseudoknotArgs, MeshContext>,
  /** undefined **/
  insert_refseq: InContextSdkMethod<Mutation['insert_refseq'], Mutationinsert_refseqArgs, MeshContext>,
  /** undefined **/
  update_refseq: InContextSdkMethod<Mutation['update_refseq'], Mutationupdate_refseqArgs, MeshContext>,
  /** undefined **/
  delete_refseq: InContextSdkMethod<Mutation['delete_refseq'], Mutationdelete_refseqArgs, MeshContext>,
  /** undefined **/
  insert_refseq_full_region: InContextSdkMethod<Mutation['insert_refseq_full_region'], Mutationinsert_refseq_full_regionArgs, MeshContext>,
  /** undefined **/
  update_refseq_full_region: InContextSdkMethod<Mutation['update_refseq_full_region'], Mutationupdate_refseq_full_regionArgs, MeshContext>,
  /** undefined **/
  delete_refseq_full_region: InContextSdkMethod<Mutation['delete_refseq_full_region'], Mutationdelete_refseq_full_regionArgs, MeshContext>,
  /** undefined **/
  insert_rfamseq: InContextSdkMethod<Mutation['insert_rfamseq'], Mutationinsert_rfamseqArgs, MeshContext>,
  /** undefined **/
  update_rfamseq: InContextSdkMethod<Mutation['update_rfamseq'], Mutationupdate_rfamseqArgs, MeshContext>,
  /** undefined **/
  delete_rfamseq: InContextSdkMethod<Mutation['delete_rfamseq'], Mutationdelete_rfamseqArgs, MeshContext>,
  /** undefined **/
  insert_rfamseq_temp: InContextSdkMethod<Mutation['insert_rfamseq_temp'], Mutationinsert_rfamseq_tempArgs, MeshContext>,
  /** undefined **/
  update_rfamseq_temp: InContextSdkMethod<Mutation['update_rfamseq_temp'], Mutationupdate_rfamseq_tempArgs, MeshContext>,
  /** undefined **/
  delete_rfamseq_temp: InContextSdkMethod<Mutation['delete_rfamseq_temp'], Mutationdelete_rfamseq_tempArgs, MeshContext>,
  /** undefined **/
  insert_rnacentral_matches: InContextSdkMethod<Mutation['insert_rnacentral_matches'], Mutationinsert_rnacentral_matchesArgs, MeshContext>,
  /** undefined **/
  update_rnacentral_matches: InContextSdkMethod<Mutation['update_rnacentral_matches'], Mutationupdate_rnacentral_matchesArgs, MeshContext>,
  /** undefined **/
  delete_rnacentral_matches: InContextSdkMethod<Mutation['delete_rnacentral_matches'], Mutationdelete_rnacentral_matchesArgs, MeshContext>,
  /** undefined **/
  insert_rscape_annotations: InContextSdkMethod<Mutation['insert_rscape_annotations'], Mutationinsert_rscape_annotationsArgs, MeshContext>,
  /** undefined **/
  update_rscape_annotations: InContextSdkMethod<Mutation['update_rscape_annotations'], Mutationupdate_rscape_annotationsArgs, MeshContext>,
  /** undefined **/
  delete_rscape_annotations: InContextSdkMethod<Mutation['delete_rscape_annotations'], Mutationdelete_rscape_annotationsArgs, MeshContext>,
  /** undefined **/
  insert_secondary_structure_image: InContextSdkMethod<Mutation['insert_secondary_structure_image'], Mutationinsert_secondary_structure_imageArgs, MeshContext>,
  /** undefined **/
  update_secondary_structure_image: InContextSdkMethod<Mutation['update_secondary_structure_image'], Mutationupdate_secondary_structure_imageArgs, MeshContext>,
  /** undefined **/
  delete_secondary_structure_image: InContextSdkMethod<Mutation['delete_secondary_structure_image'], Mutationdelete_secondary_structure_imageArgs, MeshContext>,
  /** undefined **/
  insert_seed_region: InContextSdkMethod<Mutation['insert_seed_region'], Mutationinsert_seed_regionArgs, MeshContext>,
  /** undefined **/
  update_seed_region: InContextSdkMethod<Mutation['update_seed_region'], Mutationupdate_seed_regionArgs, MeshContext>,
  /** undefined **/
  delete_seed_region: InContextSdkMethod<Mutation['delete_seed_region'], Mutationdelete_seed_regionArgs, MeshContext>,
  /** undefined **/
  insert_sunburst: InContextSdkMethod<Mutation['insert_sunburst'], Mutationinsert_sunburstArgs, MeshContext>,
  /** undefined **/
  update_sunburst: InContextSdkMethod<Mutation['update_sunburst'], Mutationupdate_sunburstArgs, MeshContext>,
  /** undefined **/
  delete_sunburst: InContextSdkMethod<Mutation['delete_sunburst'], Mutationdelete_sunburstArgs, MeshContext>,
  /** undefined **/
  insert_taxonomic_tree: InContextSdkMethod<Mutation['insert_taxonomic_tree'], Mutationinsert_taxonomic_treeArgs, MeshContext>,
  /** undefined **/
  update_taxonomic_tree: InContextSdkMethod<Mutation['update_taxonomic_tree'], Mutationupdate_taxonomic_treeArgs, MeshContext>,
  /** undefined **/
  delete_taxonomic_tree: InContextSdkMethod<Mutation['delete_taxonomic_tree'], Mutationdelete_taxonomic_treeArgs, MeshContext>,
  /** undefined **/
  insert_taxonomy: InContextSdkMethod<Mutation['insert_taxonomy'], Mutationinsert_taxonomyArgs, MeshContext>,
  /** undefined **/
  update_taxonomy: InContextSdkMethod<Mutation['update_taxonomy'], Mutationupdate_taxonomyArgs, MeshContext>,
  /** undefined **/
  delete_taxonomy: InContextSdkMethod<Mutation['delete_taxonomy'], Mutationdelete_taxonomyArgs, MeshContext>,
  /** undefined **/
  insert_taxonomy_websearch: InContextSdkMethod<Mutation['insert_taxonomy_websearch'], Mutationinsert_taxonomy_websearchArgs, MeshContext>,
  /** undefined **/
  update_taxonomy_websearch: InContextSdkMethod<Mutation['update_taxonomy_websearch'], Mutationupdate_taxonomy_websearchArgs, MeshContext>,
  /** undefined **/
  delete_taxonomy_websearch: InContextSdkMethod<Mutation['delete_taxonomy_websearch'], Mutationdelete_taxonomy_websearchArgs, MeshContext>,
  /** undefined **/
  insert_version: InContextSdkMethod<Mutation['insert_version'], Mutationinsert_versionArgs, MeshContext>,
  /** undefined **/
  update_version: InContextSdkMethod<Mutation['update_version'], Mutationupdate_versionArgs, MeshContext>,
  /** undefined **/
  delete_version: InContextSdkMethod<Mutation['delete_version'], Mutationdelete_versionArgs, MeshContext>,
  /** undefined **/
  insert_wikitext: InContextSdkMethod<Mutation['insert_wikitext'], Mutationinsert_wikitextArgs, MeshContext>,
  /** undefined **/
  update_wikitext: InContextSdkMethod<Mutation['update_wikitext'], Mutationupdate_wikitextArgs, MeshContext>,
  /** undefined **/
  delete_wikitext: InContextSdkMethod<Mutation['delete_wikitext'], Mutationdelete_wikitextArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Rfam"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
